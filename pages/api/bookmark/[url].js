import { unfurl } from 'unfurl.js';
export default async function handler(req, res) {
  const { url } = req.query;
  const linkPreview = await unfurl(url, {
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.149 Safari/537.36',
  });
  res.status(200).json(linkPreview);
}