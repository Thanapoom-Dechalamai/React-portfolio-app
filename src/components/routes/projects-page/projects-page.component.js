import ProjectContainer from '../../project-con/project-con.component';

import './projects-page.style.css';

const ProjectsPage = () =>
{
    return (
        <div className="container">
            <div className="project-header highlights-brown">
                <h2>Projects</h2>
            </div>
            <ProjectContainer projects={[{ projectTitle: "Test1" }]} />
        </div>
    );
};

export default ProjectsPage;