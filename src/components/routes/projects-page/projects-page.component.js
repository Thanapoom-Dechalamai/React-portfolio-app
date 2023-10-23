import { useEffect, useState } from 'react';
import Select from 'react-select';
import ProjectContainer from '../../project-con/project-con.component';
import freespaceImg from '../../../imgs/freespace-preview.png';
import populationImg from '../../../imgs/population-growth-preview.png';
import './projects-page.style.css';
import 'animate.css';

const ProjectsPage = () =>
{
    const [projects, setProjects] = useState([]);
    const [selectedType, setSelectedType] = useState(0);

    const onSelectType = (taget) =>
    {
        setSelectedType(Number(taget?.value));
    };

    useEffect(() =>
    {
        const initialProjects = [
            {
                id: 1,
                title: "FreeSpace",
                description: "FreeSpace is social media web application, I created this site because I love using threads and I wanted to try creating a full stack project to learn and get better at it. It took me about two weeks to build and it was quite difficult. But I still pay attention to details. Hope you guys like it.",
                image: freespaceImg,
                githubUrl: "https://github.com/Thanapoom-Dechalamai/MERN-threads-clone",
                demoUrl: "https://freespace.vercel.app/",
                type: 1
            },
            {
                id: 2,
                title: "Population growth",
                description: "On this page you will find data, charts, and text about how our total population growth has changed between 1950 and 2021. How has this changed? All population information is taken from a database and displayed as a chart.",
                image: populationImg,
                githubUrl: "https://github.com/Thanapoom-Dechalamai/population",
                demoUrl: "https://population-silk.vercel.app/",
                type: 1
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
            <section className='project-con-section animate__animated animate__fadeInUp'>
                <ProjectContainer projects={filteredProjects} />
            </section>
        </main>
    );
};

export default ProjectsPage;