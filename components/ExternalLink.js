import { ArrowTopRightIcon } from '@radix-ui/react-icons';

const ExternalLink = ({ href, children }) => (
  <a
    className="text-gray-500 hover:text-gray-600 transition"
    target="_blank"
    rel="noopener noreferrer"
    href={href}
  >
    {children}
    <ArrowTopRightIcon className="ml-1 inline-block"/>
  </a>

);

export default ExternalLink;
