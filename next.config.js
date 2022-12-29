module.exports = {
  // target: 'serverless',
  swcMinify: true,
  // future: {
  //   strictPostcssConfiguration: true
  // },
  reactStrictMode: true,
  images: {
    unoptimized: true,
    domains: [
      'i.scdn.co', // Spotify Album Art
      'dl.airtable.com',
      'pbs.twimg.com', // Twitter Profile Picture
      'cdn.jsdelivr.net', // Github 图床 CDN
      'img1.doubanio.com', // 豆瓣图片
      'img2.doubanio.com', // 豆瓣图片
      'img3.doubanio.com', // 豆瓣图片
      'img9.doubanio.com', // 豆瓣图片
      'cdn.dribbble.com', // 引用 dribbble 图片
      'imagedelivery.net',
      's3.us-west-2.amazonaws.com'
    ]
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders
      }
    ];
  },
  webpack: (config, { dev, isServer }) => {
    // SVGR
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack']
    });

    if (isServer) {
      require('./scripts/generate-sitemap');
      require('./scripts/generate-rss');
    }

    // Replace React with Preact only in client production build
    if (!dev && !isServer) {
      Object.assign(config.resolve.alias, {
        react: 'preact/compat',
        'react-dom/test-utils': 'preact/test-utils',
        'react-dom': 'preact/compat'
      });
    }

    return config;
  }
};

// https://securityheaders.com
const ContentSecurityPolicy = `
  child-src *.youtube.com *.google.com *.twitter.com *.giscus.app;
  style-src 'self' 'unsafe-inline' *.googleapis.com;
  img-src * blob: data:;
  connect-src *;
`;

const securityHeaders = [
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP
  {
    key: 'Content-Security-Policy',
    value: ContentSecurityPolicy.replace(/\n/g, '')
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy
  {
    key: 'Referrer-Policy',
    value: 'origin-when-cross-origin'
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options
  {
    key: 'X-Frame-Options',
    value: 'DENY'
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Content-Type-Options
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff'
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-DNS-Prefetch-Control
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on'
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=31536000; includeSubDomains; preload'
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Feature-Policy
  // Opt-out of Google FLoC: https://amifloced.org/
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()'
  }
];
