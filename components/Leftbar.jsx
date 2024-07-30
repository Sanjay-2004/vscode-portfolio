"use client"
import Link from "next/link";
import { IoMdCopy } from "react-icons/io";
import { IoGitBranchOutline } from "react-icons/io5";
import { IoCodeSlash } from "react-icons/io5";
import { AiOutlineMail } from "react-icons/ai";
import { usePathname } from "next/navigation";
import { IoMdContact } from "react-icons/io";
import { IoMdSettings } from "react-icons/io";

const Leftbar = () => {
    const tabs = [
        { href: "", icon: <IoMdCopy /> },
        { href: "github", icon: <IoGitBranchOutline /> },
        { href: "projects", icon: <IoCodeSlash /> },
        { href: "contact", icon: <AiOutlineMail /> },
    ]
    const bottomTabs = [
        { href: "about", icon: <IoMdContact /> },
        { href: "settings", icon: <IoMdSettings /> }
    ]

    const currentRoute = usePathname();
    return (
        <nav className='flex flex-col justify-between items-center bg-tabs-bg '>
            <ul className='flex flex-col justify-start items-center bg-tabs-bg'>
                {tabs.map((tab, index) => {
                    const isActive = currentRoute === `/${tab.href}`;
                    return (
                        <Link
                            key={index}
                            href={`/${tab.href}`}
                            className={`text-4xl text-leftbar-text hover:bg-tab-active-bg p-2 ${isActive
                                ? "border-r-0 border-l-2 bg-main-bg border-accent-color"
                                : ""
                                }`}
                        >
                            {tab.icon}
                        </Link>
                    );
                }
                )}
            </ul>
            <ul className='flex flex-col justify-end items-center bg-tabs-bg'>
                {bottomTabs.map((tab, index) => {
                    const isActive = currentRoute === `/${tab.href}`;
                    return (
                        <Link
                            key={index}
                            href={`/${tab.href}`}
                            className={`text-4xl text-leftbar-text hover:bg-tab-active-bg p-2 ${isActive
                                ? "border-r-0 border-l-2 bg-main-bg border-accent-color"
                                : ""
                                }`}
                        >
                            {tab.icon}
                        </Link>
                    );
                }
                )}
            </ul>
        </nav>
    )
}

export default Leftbar
