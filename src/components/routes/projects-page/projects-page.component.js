import { useEffect, useState } from 'react';
import Select from 'react-select';
import ProjectContainer from '../../project-con/project-con.component';
import todoImg from '../../../imgs/project-todo-list.png';
import './projects-page.style.css';
import 'animate.css';

const ProjectsPage = () =>
{
    const [projects, setProjects] = useState([]);
    const [selectedType, setSelectedType] = useState(0);

    const onSelectType = (taget) =>
    {
        console.log(taget);
        setSelectedType(Number(taget?.value));
    };

    useEffect(() =>
    {
        const initialProjects = [
            {
                id: 1,
                title: "To-Do List App",
                description: "To-Do List App",
                image: todoImg,
                embedId: "393C3pr2ioY",
                githubUrl: "https://github.com/Thanapoom-Dechalamai/React-todolist-app",
                demoUrl: "https://superb-arithmetic-950198.netlify.app/",
                type: 1
            },
            {
                id: 2,
                title: "Project A",
                description: "Hellooooooooo!",
                image: "https://images.unsplash.com/photo-1534423861386-85a16f5d13fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
                embedId: "erLvLQF6ROQ?list=RDerLvLQF6ROQ",
                githubUrl: "https://github.com/Thanapoom-Dechalamai/React-todolist-app",
                demoUrl: "https://superb-arithmetic-950198.netlify.app/",
                type: 2
            }
        ];
        setProjects(initialProjects);
    }, []);

    const filteredProjects = selectedType === 0 ? projects : projects.concat().filter(x => x.type === selectedType);
    const options = [
        { value: 0, label: 'All' },
        { value: 1, label: 'Web' },
        { value: 2, label: 'Game' }
    ];
    const customStyles = {
        control: (provided, state) => ({
            ...provided,
            backgroundColor: '#DBA07D', // Control background color
            borderColor: "#B47855", // Border color
            color: 'white',
            boxShadow: state.isFocused ? "0 0 0 1px #B47855" : 'none',
            ':hover': {
                borderColor: "#B47855",
                boxShadow: "0 0 0 1px #B47855"
            },
            fontWeight: 'normal'
        }),
        option: (provided, state) => ({
            ...provided,
            backgroundColor: state.isSelected ? '#B47855' : '#DBA07D', // Selected option background color
            color: 'white', // Selected option text color
            ':hover': {
                backgroundColor: '#B47855', // Hover background color
            },
        }),
        placeholder: provided => ({
            ...provided,
            color: 'white', // Placeholder text color
            opacity: '0.75'
        }),
        singleValue: provided => ({
            ...provided,
            color: 'white', // Placeholder text color
        }),
        dropdownIndicator: provided => ({
            ...provided,
            color: 'white', // Arrow color
            ':hover': {
                color: '#f0f0f0'
            }
        }),
        menu: provided => ({
            ...provided,
            backgroundColor: 'transparent', // Remove the white space background
            boxShadow: 'none', // Remove the default box shadow
            marginTop: '0'
        }),
    };

    return (
        <main className="container min-vh-100">
            <section className="project-header highlights-brown animate__animated animate__fadeInDown">
                <div className='project-header-text'>
                    Projects
                </div>
            </section>
            <section className="type-filter animate__animated animate__fadeInDown">
                <label htmlFor="filter">Type:</label>
                <Select
                    options={options}
                    className="custom-select"
                    styles={customStyles}
                    onChange={onSelectType}
                    menuPortalTarget={document.body}
                />
            </section>
            <section className='project-con-section'>
                <ProjectContainer projects={filteredProjects} />
            </section>
        </main>
    );
};

export default ProjectsPage;