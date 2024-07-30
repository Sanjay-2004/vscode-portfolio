"use client";
import React, { useState } from 'react';
import { RiArrowDropRightLine, RiArrowDropDownLine } from 'react-icons/ri';
import { navbarTabs } from '@/json/tabs';
import Link from 'next/link';
import Image from 'next/image';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(true);

    // Toggle function for the sidebar
    const handleToggle = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <div className='flex flex-col font-sourceSansPro bg-tabs-bg justify-start items-start w-48'>
            <p className="text-sm m-3">EXPLORER</p>
            <div onClick={handleToggle} className="flex items-center justify-start w-full cursor-pointer">
                {isOpen ? (
                    <RiArrowDropDownLine className='text-2xl' />
                ) : (
                    <RiArrowDropRightLine className='text-2xl' />
                )}
                <p className="text-sm ml-2">PORTFOLIO</p>
            </div>
            <div className="flex flex-col items-start justify-start w-full mt-2">
                {isOpen && navbarTabs.map((tab, index) => (
                    <div
                        key={index}
                        className='hover:bg-tab-active-bg w-full'>
                        <Link
                            href={`/${tab.href}`}
                            className="flex items-center p-[2px] ms-2 text-xs group hover:bg-tab-active-bg"
                        >
                            <Image
                                src={tab.icon}
                                alt={tab.name}
                                width={16} // Adjust width as necessary
                                height={16} // Adjust height as necessary
                                className="mr-2"
                            />
                            <span className="text-sm">{tab.name}</span>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Sidebar;
