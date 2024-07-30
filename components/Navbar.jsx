'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdClose } from "react-icons/md";

const tabs = [
    { name: 'home.jsx', icon: '/images/react.png', href: '' },
    { name: 'about.html', icon: '/images/html.png', href: 'about' },
    { name: 'contact.css', icon: '/images/css.png', href: 'contact' },
    { name: 'projects.js', icon: '/images/js.png', href: 'projects' },
    { name: 'github.md', icon: '/images/readme.png', href: 'github' },
];

const Navbar = () => {
    const currentRoute = usePathname();

    return (
        <nav className="flex justify-normal gap-2 text-4xl bg-tabs-bg">
            {tabs.map((tab, index) => {
                const isActive = currentRoute === `/${tab.href}`;
                return (
                    <Link key={index} href={`/${tab.href}`} className={`flex justify-evenly gap-2 items-center p-[5px] group ${isActive ? 'border-b-0 border-t-2 bg-main-bg border-accent-color' : ''}`}>
                        <img src={tab.icon} alt={tab.name} className="w-5 h-5" />
                        <span className="text-sm">{tab.name}</span>
                        <MdClose className={`text-sm opacity-0 ${isActive ? 'opacity-100' : 'group-hover:opacity-50 group-focus:opacity-100'}`} />
                    </Link>
                );
            })}
        </nav>
    );
};

export default Navbar;
