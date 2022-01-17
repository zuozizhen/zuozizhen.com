//遗愿清单的 list

import { CheckIcon } from '@radix-ui/react-icons';

export default function CheckList(props) {
  return (
    <div className="flex space-x-2">
      <div className="text-xs mt-0.5 text-gray-500">{props.index}</div>
      {props.checked ?
        <CheckIcon className="mt-0.5 bg-blue-500 text-white w-4 h-4 rounded flex justify-center items-center"/>
        :
        <div className="mt-0.5 border border-gray-700 w-4 h-4 rounded flex justify-center items-center"></div>
      }
      <div>
        <div className="font-semibold text-sm">{props.title}</div>
        <div className="text-xs text-gray-500">{props.description}</div>
      </div>
    </div >
  )
}
