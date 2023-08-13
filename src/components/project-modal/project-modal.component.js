import React from 'react';

const ProjectModal = ({ project, showModal, toggleModal }) =>
{
    return (
        showModal && (
            <div className="modal" tabIndex="-1" role="dialog" style={{ display: 'block' }}>
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title text fw-bold">{project.title}</h5>
                            <button type="button" className="btn btn-danger" onClick={toggleModal}>
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body h-auto">
                            <div className="youtube-clip">
                                <iframe
                                    width="100%"
                                    height="100%"
                                    src={`https://www.youtube.com/embed/${project.embedId}`}
                                    title="YouTube Video"
                                    allowFullScreen
                                ></iframe>
                            </div>
                            <div className="project-details">
                                <p>Description: {project.description}</p>
                                <button
                                    type="button"
                                    className="btn btn-primary"
                                    onClick={() => window.open(project.demoUrl)}
                                >
                                    {project.type === 1 ? <>Go to website</> : project.type === 2 ? <>Download</> : <>Demo</>}
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-dark ms-2"
                                    onClick={() => window.open(project.githubUrl)}
                                >
                                    Github
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    );
};

export default ProjectModal;
