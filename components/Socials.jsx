import React from 'react';
import "@/styles/linenumbers.css";
import contact from "@/json/contact.json";

const Socials = () => {
    return (
        <div className='my-2 w-[49%]'>
            <h3 className='font-jetbrains font-semibold text-xl mx-3'>Reach out via Socials</h3>
            <div className="code font-jetbrains text-lg leading-7">

                <p className="line">
                    <span className="text-accent-color">.contact</span> &#123;
                </p>
                {contact.slice(0, 3).map((line, index) => (
                    <p key={index} className="line">
                        &nbsp;&nbsp;&nbsp;{line.social}: <a className='hover:underline text-accent-color' href={line.href} target='_blank' rel='noopener noreferrer'>{line.link}</a>
                    </p>
                ))}
                <p className="line">&#125;</p>
                <p className="line">&nbsp;</p>
                <p className="line"><span className='text-accent-color'>#socials</span> &#123;</p>
                {contact.slice(3).map((line, index) => (
                    <p key={index + 3} className="line">
                        &nbsp;&nbsp;&nbsp;{line.social}: <a className='hover:underline text-accent-color' href={line.href} target='_blank' rel='noopener noreferrer'>{line.link}</a>
                    </p>
                ))}
                <p className="line">&#125;</p>
            </div>
        </div>
    );
};

export default Socials;
