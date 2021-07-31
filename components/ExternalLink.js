import { ArrowTopRightIcon } from '@radix-ui/react-icons';

const ExternalLink = ({ href, children }) => (
  <div>
    <a
      className="text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 transition border-gray-900"
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
