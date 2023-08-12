import React from 'react';
import ProjectItem from '../project-item/project-item.component';

const ProjectContainer = (props) =>
{
    const { projects } = props;

    return (
        <div className="project-con">
            {
                projects?.map((project, index) =>
                (
                    <ProjectItem key={index} project={project} />
                ))
            }
        </div>
    );
};

export default ProjectContainer;