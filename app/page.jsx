import Tab from '@/components/Tab'
import React from 'react'

const tabs = [
  { name: 'home.jsx', icon: '/images/react.png' },
  { name: 'projects.js', icon: '/images/js.png' },
  { name: 'about.html', icon: '/images/html.png' },
  { name: 'contact.json', icon: '/images/json.png' },
  { name: 'github.md', icon: '/images/readme.png' },

]

const Home = () => {
  return (
    <div className=' bg-slate-500 flex justify-evenly py-10 text-4xl'>
      {tabs.map((tab, index) => (
        <Tab key={index} {...tab} />
      ))}
    </div>
  )
}

export default Home
