import { IoGitBranchOutline } from "react-icons/io5";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { IoWarningOutline } from "react-icons/io5";
import { FaRegBell } from "react-icons/fa";

const Topbar = () => {
    return (
        <div className='relative flex justify-between items-center bg-tabs-bg'>
            <ul className="flex text-xs items-center">
                <li className='px-4 py-[2px] hover:bg-button-hover-bg hover:text-black cursor-pointer'>
                    <a href="https://github.com/Sanjay-2004/vscode-portfolio.git" target="_blank" className="flex gap-1 items-center"> <span><IoGitBranchOutline /></span>main</a>
                </li>
                <li className=' flex gap-1 items-center px-4 py-[2px] hover:bg-bottombar-hover-bg'>
                    <p><IoMdCloseCircleOutline /></p>
                    <p>0</p>
                    <p><IoWarningOutline /></p>
                    <p>0</p>
                </li>
            </ul>
            <ul className='flex text-xs text-bottombar-text items-center justify-end'>
                <li className='px-3 py-[2px] hover:bg-bottombar-hover-bg cursor-default'>
                    Ln 21,Col 30
                </li>
                <li className='px-3 py-[2px] hover:bg-bottombar-hover-bg cursor-default'>
                    Spaces: 4
                </li>
                <li className='px-3 py-[2px] hover:bg-bottombar-hover-bg cursor-default'>
                    UTF-8
                </li>
                <li className='px-4 py-[2px] hover:bg-bottombar-hover-bg cursor-default'>
                    JavaScript JSX
                </li>
                <li className='me-2 px-1 py-[2px] hover:bg-bottombar-hover-bg cursor-default'>
                    <FaRegBell />
                </li>

            </ul>
        </div>
    )
}

export default Topbar
