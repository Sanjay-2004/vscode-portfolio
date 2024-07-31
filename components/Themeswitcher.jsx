'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import themes from '@/json/themes.json';

const Themeswitcher = () => {
    const [selectedTheme, setSelectedTheme] = useState('');

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') || 'github-dark';
        document.documentElement.setAttribute('data-theme', savedTheme);
        setSelectedTheme(savedTheme); // Set the initial state to the saved theme
    }, []);

    const handleThemeChange = (theme) => {
        // console.log(`Switching to theme: ${theme}`);
        setSelectedTheme(theme);
        localStorage.setItem('theme', theme);
        document.documentElement.setAttribute('data-theme', theme);
    };

    return (
        <div className="p-10">
            <h2 className="text-xl font-bold mb-4">Select a Theme</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2">
                {themes.map((theme) => (

                    <div
                        key={theme.theme}
                        className='p-4 flex flex-col items-center cursor-pointer gap-1'
                    >
                        {/* {console.log(theme)} */}
                        <Image
                            src={`/themes${theme.icon}`} // Adjust path as necessary
                            alt={theme.name}
                            width={100} // Adjust width as necessary
                            height={100} // Adjust height as necessary
                            className="mb-2"
                        />
                        <h3 className="text-lg font-semibold">{theme.name}</h3>
                        <p className="text-sm text-accent-color">{theme.publisher}</p>
                        <button
                            className={`rounded-sm px-3 ${selectedTheme === theme.theme ? 'bg-button-hover-bg text-black' : 'bg-button-bg text-black'} hover:bg-button-hover-bg`}
                            onClick={() => handleThemeChange(theme.theme)}
                        >
                            Set Theme
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Themeswitcher;
