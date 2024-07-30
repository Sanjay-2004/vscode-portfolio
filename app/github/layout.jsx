// app/projects/ProjectsLayout.jsx
import { Metadata } from 'next';

export const metadata = {
    title: 'Github',
};

const ProjectsLayout = ({ children }) => {
    return (
        <div>
            {children}
        </div>
    );
};

export default ProjectsLayout;
