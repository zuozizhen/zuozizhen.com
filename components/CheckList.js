//遗愿清单的 list

import { CheckIcon } from '@radix-ui/react-icons';
import Checked from '../public/checked.svg';
import Uncheck from '../public/uncheck.svg';

export default function CheckList(props) {
  return (
      <li className="mb-6 list-none">
        <div className="flex items-center mb-2">
          {props.checked ?
            <Checked className="h-4 w-4 mr-3 text-green-700 dark:text-green-300" />
            :
            <Uncheck className="h-4 w-4 mr-3 text-gray-300 dark:text-gray-700" />
        }
        {/* <div className="text-xs text-gray-500 mr-2">{props.index}</div> */}
        <div className="font-medium text-gray-900 dark:text-gray-200 mr-3">{props.title}</div>
        {/* <div className="text-xs text-gray-300 dark:text-gray-600">{props.time}</div> */}
        </div>
        <div className="text-gray-700 dark:text-gray-400 ml-7">{props.summary}</div>
      </li>
  )
}
