import Link from "next/link"

const tabs = [
    { name: 'home.jsx', icon: '/images/react.png', href: '' },
    { name: 'projects.js', icon: '/images/js.png', href: 'projects' },
    { name: 'about.html', icon: '/images/html.png', href: 'about' },
    { name: 'contact.json', icon: '/images/json.png', href: 'contact' },
    { name: 'github.md', icon: '/images/readme.png', href: 'github' },

]
const Navbar = () => {
    return (
        <nav className=" bg-slate-900 flex justify-evenly py-3 text-4xl">
            {
                tabs.map((tab, index) => {
                    return (
                        <Link key={index} href={`/${tab.href}`} className='flex justify-evenly gap-2 items-center text-white hover:text-gray-600 focus:text-black'>
                            <img src={tab.icon} alt={tab.name} className='w-5 h-5' />
                            <span className="text-sm">{tab.name}</span>
                        </Link>
                    )
                })
            }
        </nav>
    )
}

export default Navbar
