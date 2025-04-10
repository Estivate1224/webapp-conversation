import type { FC } from 'react'
import React from 'react'
import Image from 'next/image'
import {
  Bars3Icon,
  PencilSquareIcon,
} from '@heroicons/react/24/solid'
import AppIcon from '@/app/components/base/app-icon'
export type IHeaderProps = {
  title: string
  isMobile?: boolean
  onShowSideBar?: () => void
  onCreateNewChat?: () => void
}
const Header: FC<IHeaderProps> = ({
  title,
  isMobile,
  onShowSideBar,
  onCreateNewChat,
}) => {
  return (
    <div className="shrink-0 flex items-center justify-between h-12 px-3 bg-white border-b border-gray-100">
      {isMobile
        ? (
          <div></div>
          // <div
          //   className='flex items-center justify-center h-8 w-8 cursor-pointer'
          //   onClick={() => onShowSideBar?.()}
          // >
          //   <Bars3Icon className="h-4 w-4 text-gray-500" />
          // </div>
        )
        : <template></template>}
      <div className='flex items-center space-x-2'>
        {/* <AppIcon size="small" /> */}
        <Image src="/icons/robot.png" alt="Robot icon" width={28} height={28} />
        <div className=" text-sm text-gray-800 font-bold">{title}</div>
      </div>
      {isMobile
        ? (
          <div className='flex items-center justify-center h-8 w-8 cursor-pointer'
            onClick={() => onCreateNewChat?.()}
          >
            <PencilSquareIcon className="h-4 w-4 text-gray-500" />
          </div>)
        : <template></template>}
    </div>
  )
}

export default React.memo(Header)
