import React from 'react'

const Projectcard = ({ name, description, html_url, demo_url, techStack, imgUrl }) => {
    return (
        <div className="relative bg-tabs-bg p-1">
            <img className='h-60 w-full object-cover' src={imgUrl} alt={name} />

            <div className='absolute inset-0 bg-tabs-bg p-5 flex flex-col gap-2 justify-between opacity-0 hover:opacity-90 transition-opacity duration-300 z-10'>
                <div>
                    <h3 className='font-jetbrains font-semibold text-3xl text-accent-color'>{name}</h3>
                    <p className='font-jetbrains text-lg mt-3'>{description}</p>
                </div>
                <div className='flex justify-between'>
                    <a href={html_url} target='_blank' className='text-accent-color hover:underline font-jetbrains text-sm'>Github</a>
                    <a href={demo_url} target='_blank' className='text-accent-color hover:underline font-jetbrains text-sm'>Demo</a>
                </div>
                <div className='flex flex-wrap'>
                    {techStack.map((tech, index) => (
                        <span key={index} className='bg-accent-color cursor-default font-jetbrains text-sm rounded-full px-2 py-1 my-1 mx-1'>{tech}</span>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Projectcard
