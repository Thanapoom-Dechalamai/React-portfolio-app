const ProjectItem = (props) =>
{
    const { project } = { ...props };
    console.log(project);
    return (
        <div className="project-item">
            <div className="project-img">
                <img src="https://images.unsplash.com/photo-1542401886-65d6c61db217?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="" />
            </div>
            <div className="project-title">{project.projectTitle}</div>
        </div>
    );
};
export default ProjectItem;