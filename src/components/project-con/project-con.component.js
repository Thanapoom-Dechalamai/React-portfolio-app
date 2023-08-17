import React, { useEffect } from 'react';
import ProjectItem from '../project-item/project-item.component';

const ProjectContainer = (props) =>
{
    const { projects } = props;
    useEffect(() =>
    {

    }, [projects.length]);
    return (
        <div className="project-con">
            {
                projects?.map((project) =>
                (
                    <ProjectItem key={project.id} project={project} />
                ))
            }
        </div>
    );
};

export default ProjectContainer;