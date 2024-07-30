import Contactme from '@/components/Contactme';
import Socials from '@/components/Socials';
import React from 'react';

export const metadata = {
    title: 'Contact',
}

const Contact = () => {
    return (
        <section className='flex gap-5'>
            <Socials />

            <div className='border-l border-accent-color mt-24  h-96' />

            <Contactme />
        </section>
    );
}

export default Contact;
