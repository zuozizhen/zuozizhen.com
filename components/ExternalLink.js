import { ArrowTopRightIcon } from '@radix-ui/react-icons';

const ExternalLink = ({ href, children }) => (
  <div>
    <a
      className="text-gray-900 transition hover:border-b-2 border-gray-900"
      target="_blank"
      rel="noopener noreferrer"
      href={href}
    >
      {children}
      <ArrowTopRightIcon className="ml-1 inline-block" />
    </a>
  </div>
);

export default ExternalLink;
