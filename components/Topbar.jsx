import React from 'react'
import Image from 'next/image'
import { IoMdClose } from "react-icons/io";
import { TiTabsOutline } from "react-icons/ti";
import { MdMinimize } from "react-icons/md";

const Topbar = () => {
    return (
        <div className='relative flex justify-between items-center bg-tabs-bg border border-t-0 border-l-0 border-r-0 border-b-black'>
            <ul className="flex text-xs items-center">
                <li className='px-1 me-2 cursor-default'>
                    <Image src="/images/vscode.png" width={15} height={15} alt="VSCode" />
                </li>
                <li className='px-2 py-[2px] hover:bg-tab-active-bg hover:rounded-sm cursor-default'>File</li>
                <li className='px-2 py-[2px] hover:bg-tab-active-bg hover:rounded-sm cursor-default'>Edit</li>
                <li className='px-2 py-[2px] hover:bg-tab-active-bg hover:rounded-sm cursor-default'>Selection</li>
                <li className='px-2 py-[2px] hover:bg-tab-active-bg hover:rounded-sm cursor-default'>View</li>
                <li className='px-2 py-[2px] hover:bg-tab-active-bg hover:rounded-sm cursor-default'>Go</li>
                <li className='px-2 py-[2px] hover:bg-tab-active-bg hover:rounded-sm cursor-default'>Run</li>
                <li className='px-2 py-[2px] hover:bg-tab-active-bg hover:rounded-sm cursor-default'>Terminal</li>
                <li className='px-2 py-[2px] hover:bg-tab-active-bg hover:rounded-sm cursor-default'>Help</li>
            </ul>
            <div className="absolute left-1/2 transform -translate-x-1/2 px-[15%] py-[1px] whitespace-nowrap text-xs border-explorer-border rounded-md border-[0.5px] bg-tab-active-bg">
                Sanjay Agamamidi | Portfolio
            </div>
            <ul className='flex text-lg items-center'>
                <li className='hover:bg-tab-active-bg p-1'><MdMinimize /></li>
                <li className='hover:bg-tab-active-bg p-1'><TiTabsOutline /></li>
                <li className='hover:bg-red-500 p-1'><IoMdClose /></li>
            </ul>
        </div>
    )
}

export default Topbar
