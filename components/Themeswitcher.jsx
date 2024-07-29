'use client';

import { useState, useEffect } from 'react';
import themes from '@/json/themes.json';

const Themeswitcher = () => {
    const [selectedTheme, setSelectedTheme] = useState('');

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') || 'github-dark';
        document.documentElement.setAttribute('data-theme', savedTheme);
    }, []);

    const handleThemeChange = (theme) => {
        console.log(`Switching to theme: ${theme}`);
        setSelectedTheme(theme);
        localStorage.setItem('theme', theme);
        document.documentElement.setAttribute('data-theme', theme);
    };

    return (
        <div className="p-4 bg-main-bg color-text-color">
            <h2 className="text-xl font-bold mb-4 text-text-color">Select a Theme</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                {themes.map((theme) => (
                    <div
                        key={theme.theme}
                        className='border-2 border-tab-border rounded-lg p-4 flex flex-col items-center cursor-pointer bg-sidebar-hover-bg'
                        onClick={() => handleThemeChange(theme.theme)}
                    >
                        <img
                            src={`/themes/${theme.icon}`}
                            alt={theme.name}
                            className="w-24 h-24 object-cover mb-2"
                        />
                        <h3 className="text-lg font-semibold text-text-color">{theme.name}</h3>
                        <p className="text-sm text-accent-color">{theme.publisher}</p>
                        <p className="text-sm text-text-color mt-2">{theme.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Themeswitcher;
