import React from 'react';
import { motion } from 'framer-motion';

const projects = [
    {
        name: "A Week of Coffee Breaks",
        link: "https://github.com/hannahpmoran/cs314/blob/main/data-card/README.md#data-card-a-week-of-coffee-breaks",
        role: "Designer",
        year: "2024"
    },
    {
        name: "Mapping Intercepted Radio Communication",
        link: "https://arcg.is/Su81O0",
        role: "Designer and Developer",
        year: "2024"
    },
    {
        name: "CarlMart",
        link: "https://github.com/BNwike47/CarlMart-SWEexternship",
        role: "Designer and Frontend Developer",
        year: "2023"
    },
    {
        name: "Ivy",
        link: "https://github.com/hannahpmoran/cs232/tree/main/ivy#ivy",
        role: "Designer, Developer, Sculptor",
        year: "2023"
    },
    {
        name: "HAFA",
        link: "https://github.com/hannahpmoran/cs232/tree/main/ivy#ivy",
        role: "Designer",
        year: "2023"
    },
    {
        name: "intiMET",
        link: "https://github.com/hannahpmoran/cs257/tree/main/webapp#intimet",
        role: "Designer, Developer, Sculptor",
        year: "2023"
    },
    {
        name: "Boggle",
        link: "https://github.com/hannahpmoran/cs111/tree/main/boggle#bogglepy",
        role: "Designer and Developer",
        year: "2021"
    }
    
];

const photographyProjects = [
    {
        name: "Signed",
        link: "https://flic.kr/s/aHBqjBoKGx",
        role: "Photographer and Editor",
        year: "2023"
    },
    {
        name: "Cookbook",
        link: "https://flic.kr/s/aHBqjBoPCX",
        role: "Photographer and Editor",
        year: "2023"
    },
    {
        name: "Walker on Film",
        link: "https://flic.kr/s/aHBqjBoMjB",
        role: "Photographer",
        year: "2023"
    },
    {
        name: "Nirthfolde",
        link: "https://flic.kr/s/aHBqjBoKF7",
        role: "Photographer",
        year: "2022"
    },
    {
        name: "rgb.",
        link: "https://flic.kr/s/aHBqjBoMdj",
        role: "Photographer and Editor",
        year: "2022"
    }
    
];

const maxProjects = [
    {
        name: "Finale",
        link: "https://github.com/hannahpmoran/musc208/tree/main/the_finale#the-finale",
        role: "Max Developer",
        year: "2023"
    },
    {
        name: "Ghost",
        link: "https://github.com/hannahpmoran/musc208/tree/main/ghost#ghost",
        role: "Max Developer",
        year: "2023"
    },
    {
        name: "Rain",
        link: "https://github.com/hannahpmoran/musc208/tree/main/rain#rain",
        role: "Max Developer",
        year: "2023"
    },
    {
        name: "Study in Randomness",
        link: "https://github.com/hannahpmoran/musc208/tree/main/randomness#randomness",
        role: "Max Developer",
        year: "2023"
    }
    
];

function Projects() {
    return (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.9, ease: 'easeInOut' }}
            >

        <div style = {{paddingRight: '10px'}}>
        <div style = {{ alignItems: 'flex-start', height: '40%',  textAlign: 'right',  top: '0', paddingTop: '0px', paddingLeft: '20%', paddingRight: '10px', right: '0'}}>
            <div style = {{ textDecoration: 'line-through', fontSize: '30pt', color: 'darkgray'}}>
                WORK WORK WORK WORK
            </div>
        </div>

        <div style = {{position: 'fixed', width: '20%', paddingLeft:'15%', paddingRight:'30%', top: '100px'}} >
            <span><a href = '/projects'><b>Explore </b></a></span>
            <p>Here is a collection of my highlighted works over the past three years. 
                The collection displays my experience with software development, digital design, and various other creative mediums.
                Much of my work can be found on my <a href = 'https://github.com/hannahpmoran'>Github.</a>  </p>
        </div>

        <div style={{ textAlign: 'right',  paddingLeft: '40%'}} >
            {/* <p style={{ fontSize: '25px', fontWeight: '1', color: 'blue', padding: '30px'}}>PROJECTS (DESIGN AND DEVELOPMENT)</p> */}
            <h2 style={{ margin: 0, padding: 0,  color: '#6B9E96', textDecoration: 'underline'}}>PROJECTS (DESIGN AND DEVELOPMENT)</h2>
            <div>
                <ul className = 'projects-list' >
                    {projects.map((project, index) => (
                        <li key={index}>
                            <p style={{ margin: '0'}}><a className="projects-list-text" href={project.link}>{project.name}</a></p>
                            <p style={{ margin: '0', paddingBottom: '50px'}}>
                                <b>{project.role} / {project.year} </b>
                            </p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    
        <div style={{ textAlign: 'right',  paddingLeft: '40%'}} >
            {/* <p style={{ fontSize: '25px', fontWeight: '1', color: 'blue', padding: '30px'}}>PROJECTS (DESIGN AND DEVELOPMENT)</p> */}
            <h2 style={{ margin: 0, padding: 0,  color: '#6B9E96', textDecoration: 'underline' }}>PROJECTS (DESIGN AND DEVELOPMENT)</h2>
            <div>
                <ul className = 'projects-list' >
                    {projects.map((project, index) => (
                        <li key={index}>
                            <p style={{ margin: '0'}}><a className="projects-list-text" href={project.link}>{project.name}</a></p>
                            <p style={{ margin: '0', paddingBottom: '50px'}}>
                                <b>{project.role} / {project.year} </b>
                            </p>
                        </li>
                    ))}
                </ul>
            </div>

            {/* <p style={{ fontSize: '25px', padding: '30px', fontWeight: '1', color: 'blue', margin: '0'}}>PROJECTS (PHOTOGRAPHY)</p> */}
            <h2 style={{ margin: 0, padding: 0, color: '#6B9E96', textDecoration: 'underline' }}>PROJECTS (PHOTOGRAPHY)</h2>
            <div>
                <ul className = 'projects-list' >
                    {photographyProjects.map((project, index) => (
                        <li key={index}>
                            <p style={{ margin: '0'}}><a className="projects-list-text" href={project.link}>{project.name}</a></p>
                            <p style={{ margin: '0', paddingBottom: '50px'}}>
                                <b>{project.role} / {project.year} </b>
                            </p>
                        </li>
                    ))}
                </ul>
            </div>

            {/* <p style={{ fontSize: '25px',padding: '30px', fontWeight: '1', color: 'blue'}}>PROJECTS (MAX)</p> */}
            <h2 style={{ margin: 0, padding: 0, color: '#6B9E96', textDecoration: 'underline'}}>PROJECTS (MAX)</h2>
            <div>
                <ul className = 'projects-list' >
                    {maxProjects.map((project, index) => (
                        <li key={index}>
                            <p style={{ margin: '0'}}><a className="projects-list-text" href={project.link}>{project.name}</a></p>
                            <p style={{ margin: '0', paddingBottom: '50px'}}>
                                <b>{project.role} / {project.year} </b>
                            </p>
                        </li>
                    ))}
                </ul>
            </div>

        </div>
        </div>

        </motion.div>
    );
}

export default Projects;
