'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdClose } from "react-icons/md";
import Image from 'next/image';
import { navbarTabs } from '@/json/tabs'

const Navbar = () => {
    const currentRoute = usePathname();

    return (
        <nav className="flex justify-normal gap-2 text-4xl bg-tabs-bg">
            {navbarTabs.map((tab, index) => {
                const isActive = currentRoute === `/${tab.href}`;
                return (
                    <Link
                        key={index}
                        href={`/${tab.href}`}
                        className={`flex justify-evenly gap-2 items-center p-[5px] group ${isActive ? 'border-b-0 border-t-2 bg-main-bg border-accent-color' : ''}`}
                    >
                        <Image
                            src={tab.icon}
                            alt={tab.name}
                            width={20} // Adjust width as necessary
                            height={20} // Adjust height as necessary
                            className="w-5 h-5"
                        />
                        <span className="text-sm">{tab.name}</span>
                        <MdClose className={`text-sm opacity-0 ${isActive ? 'opacity-100' : 'group-hover:opacity-50 group-focus:opacity-100'}`} />
                    </Link>
                );
            })}
        </nav>
    );
};

export default Navbar;
