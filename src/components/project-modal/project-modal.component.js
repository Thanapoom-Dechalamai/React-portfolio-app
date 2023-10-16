import React from 'react';
import githubLogo from '../../imgs/GitHub_logo.png';

const ProjectModal = ({ project, showModal, toggleModal }) =>
{
    return (
        showModal && (
            <div className="modal animate__animated animate__fadeIn" tabIndex="-1" role="dialog" style={{ display: 'block' }}>
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
                                <img src={project.image} alt={project.title} width="100%" height="100%" />
                            </div>
                            <div className="project-details">
                                <div className="description-header highlights-brown">
                                    <h2>Description</h2>
                                </div>
                                <div className="description-content">
                                    <p className='mt-4'>{project.description}</p>
                                </div>
                                <button
                                    type="button"
                                    className="btn btn-primary"
                                    onClick={() => window.open(project.demoUrl)}
                                >
                                    {
                                        project.type === 1 ?
                                            <>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
                                                    <path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z" />
                                                    <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z" />
                                                </svg>
                                                <span className='ms-2'>Go to website</span>
                                            </> :
                                            project.type === 2 ?
                                                <>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-download" viewBox="0 0 16 16">
                                                        <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                                                        <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
                                                    </svg>
                                                    <span className='ms-2'>Download</span>
                                                </> :
                                                <>Demo</>
                                    }
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-github ms-2"
                                    onClick={() =>
                                    {
                                        window.open(project.githubUrl);
                                    }}
                                >
                                    <div className='btn-logo d-inline-block'>
                                        <img src={githubLogo} alt="Github" className='rounded-3 w-100 h-100' />
                                    </div>
                                    <span className='ms-1'>Github</span>
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
