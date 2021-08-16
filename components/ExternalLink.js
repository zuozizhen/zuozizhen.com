import { ArrowTopRightIcon } from '@radix-ui/react-icons';

const ExternalLink = ({ href, children }) => (
  <div>
    <a
      className="text-gray-900 hover:text-gray-600 dark:text-gray-100 dark:hover:text-gray-500 transition"
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
