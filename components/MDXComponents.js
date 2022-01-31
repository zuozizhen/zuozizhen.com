import Link from 'next/link';
import Image from 'next/image';

// import ProsCard from '@/components/ProsCard';
// import ConsCard from '@/components/ConsCard';
import Gumroad from '@/components/metrics/Gumroad';
import Unsplash from '@/components/metrics/Unsplash';
import Analytics from '@/components/metrics/Analytics';
import YouTube from '@/components/metrics/Youtube';
import Step from '@/components/Step';
import ImageWithTheme from '@/components/ImageWithTheme';
import Separator from '@/components/Separator';
import WithSubTitle from '@/components/WithSubTitle';
import FullWidthImage from '@/components/FullWidthImage';
import BleedImage from '@/components/BleedImage';


import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

const CustomLink = (props) => {
  const href = props.href;
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'));

  if (isInternalLink) {
    return (
      <Link href={href}>
        <a {...props}>{props.children}</a>
      </Link>
    );
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />;
};

const MDXComponents = {
  Image,
  ImageWithTheme,
  Separator,
  WithSubTitle,
  FullWidthImage,
  BleedImage,
  a: CustomLink,
  Analytics,
  // ConsCard,
  Gumroad,
  // ProsCard,
  Step,
  Unsplash,
  YouTube,
  AwesomeSlider
};

export default MDXComponents;
