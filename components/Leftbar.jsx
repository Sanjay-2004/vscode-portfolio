"use client"
import Link from "next/link";
import { tabs, bottomTabs } from "@/json/tabs";
import { usePathname } from "next/navigation";

const Leftbar = () => {

    const currentRoute = usePathname();
    return (
        <nav className='flex flex-col justify-between items-center '>
            <ul className='flex flex-col justify-start items-center'>
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
            <ul className='flex flex-col justify-end items-center'>
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
