import { FaLink } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

const Githubcard = ({ name, description, html_url, demo_url }) => {
    return (
        <div className='bg-tabs-bg flex flex-col justify-between gap-4 p-3 hover:shadow-2xl '>
            <h3 className="text-accent-color text-xl">{name}</h3>
            <p>{description}</p>
            <div className="flex justify-center gap-6 text-2xl">
                {html_url && (
                    <a href={html_url} target="_blank" className="text-accent-color"><FaGithub /></a>
                )}
                {demo_url && (
                    <a href={demo_url} target="_blank" className="text-accent-color"><FaLink /></a>
                )}
            </div>
        </div>
    )
}

export default Githubcard
