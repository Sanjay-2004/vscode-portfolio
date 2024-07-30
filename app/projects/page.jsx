import projects from '@/json/projects.json'
import Projectcard from '@/components/Projectcard'

const Projects = () => {
    console.log(projects)
    return (
        <div className='my-2 max-w-7xl'>
            <h3 className='font-jetbrains font-semibold text-xl mx-3'>Work I've done so far</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-10 p-5">
                {projects.map((project, index) => {
                    return <Projectcard key={index} {...project} />
                })}
            </div>
        </div>
    )
}

export default Projects
