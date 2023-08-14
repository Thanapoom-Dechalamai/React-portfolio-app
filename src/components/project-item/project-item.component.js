import React, { useState } from 'react';
import ProjectModal from '../project-modal/project-modal.component';

const ProjectItem = (props) =>
{
    const { project } = props;
    const [showModal, setShowModal] = useState(false);

    const toggleModal = () =>
    {
        setShowModal(!showModal);
    };

    return (
        <div className="project-item">
            <div className="project-img" onClick={toggleModal}>
                <img src={project.image} alt="" />
            </div>
            <div className="d-flex justify-content-between">
                <div className="project-tags">
                    {project.type === 1 ? (
                        <div className="tag rounded-5">Website</div>
                    ) : project.type === 2 ? (
                        <div className="tag rounded-5">Game</div>
                    ) : (
                        <></>
                    )}
                </div>
                <div className="project-title">{project.title}</div>
            </div>
            <ProjectModal project={project} showModal={showModal} toggleModal={toggleModal} />
        </div>
    );
};

export default ProjectItem;
