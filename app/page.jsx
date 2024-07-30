"use client"
import Image from 'next/image';
import Link from 'next/link';
import { Typewriter } from 'react-simple-typewriter';

const Home = () => {
  return (
    <div className='flex flex-col justify-center ms-5 h-[75vh] relative'>
      <div className="text-[12rem] font-montserrat font-black leading-[1.1] text-bg-text absolute">
        <h1>I BUILD</h1>
        <h1>WEBSITES</h1>
      </div>
      <div className='flex z-10 items-center justify-around'>
        <div className='flex-col'>
          <div className="text-4xl mt-5 ms-3 font-jetbrains ">Hi, I am</div>
          <div className="text-7xl mt-5 font-jetbrains ">Sanjay <span className="text-accent-color">Agamamidi</span></div>
          <div className="text-4xl mt-5 ms-3 font-jetbrains text-typewriter-color ">
            <Typewriter
              words={['Software Engineer', 'CP Enthusiast', 'Full Stack Developer']}
              loop={5}
              cursor
            />
          </div>
          <div className="ms-16 mt-8 flex z-10 gap-10 items-center">
            <Link className='font-montserrat text-xl font-semibold px-5 py-2 bg-button-bg hover:bg-button-hover-bg' href="/projects">Projects</Link>
            <Link className='font-montserrat text-xl font-semibold px-5 py-1 border-4 border-button-border hover:border-button-hover-border' href="/contact">Contact Me</Link>
          </div>
        </div>
        <img src="/coder.gif" className='h-96'></img>
      </div>
    </div>
  );
}

export default Home;
