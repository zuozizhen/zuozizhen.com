import Link from 'next/link';
import { useRouter } from 'next/router';
import clsx from 'clsx';

export default function NavLink(props) {
  const router = useRouter();
  return (
    <Link href={props.pathUrl}>
      <a
        className={clsx('text-sm', {
          'font-bold text-gray-900 dark:text-gray-50':
            router.pathname === props.pathUrl
        })}
      >
        {props.title}
      </a>
    </Link>
  )
}
