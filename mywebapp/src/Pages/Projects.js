import React from 'react';
import { motion } from 'framer-motion';

const projects = [
    {
        name: "Mapping Intercepted Radio Communication",
        link: "https://arcg.is/Su81O0",
        role: "Designer and Developer",
        year: "2024"
    },
    {
        name: "A Week of Coffee Breaks",
        link: "https://github.com/hannahpmoran/cs314/blob/main/data-card/README.md#data-card-a-week-of-coffee-breaks",
        role: "Designer",
        year: "2024"
    },
    {
        name: "Gentrification in Atlanta",
        link: "https://observablehq.com/d/70ad9ce8827add61",
        role: "Designer and Developer",
        year: "2024"
        
    },
    {
        name: "Ivy",
        link: "https://github.com/hannahpmoran/cs232/tree/main/ivy#ivy",
        role: "Designer, Developer, Sculptor",
        year: "2023"
    },
    {
        name: "CarlMart",
        link: "https://www.behance.net/gallery/199626231/CarlMart-Design-Screens",
        role: "Designer and Frontend Developer",
        year: "2023"
    },
    {
        name: "HAFA",
        link: "https://www.behance.net/gallery/199626587/HAFA-Design-Screens-%28Early-Stages%29",
        role: "Designer",
        year: "2022"
    }
    
];

const photographyProjects = [
    {
        name: "Low and High Key",
        link: "https://www.flickr.com/photos/151245207@N08/albums/72177720317346832",
        role: "Photographer and Editor",
        year: "2024"
    },
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
            <div style = {{ textDecoration: 'line-through', fontSize: '30px', color: '#BEB7B1'}}>
                WORK
            </div>
        </div>

        <div style = {{position: 'fixed', width: '20%', paddingLeft:'15%', paddingRight:'30%', top: '100px'}} >
            <p>This collection displays my experience with software development, digital design, and various other creative mediums.
                More of my work can be found on my <a href = 'https://www.behance.net/hannahmoran4/'><b>Behance</b></a>,
                 <a href = 'https://www.flickr.com/photos/151245207@N08/albums'><b> Flickr</b></a>,
                  and<a href = 'https://github.com/hannahpmoran'><b> Github</b></a>.</p>
        </div>
    
        <div style={{ textAlign: 'right',  paddingLeft: '40%'}} >
            {/* <p style={{ fontSize: '25px', fontWeight: '1', color: 'blue', padding: '30px'}}>PROJECTS (DESIGN AND DEVELOPMENT)</p> */}
            <h2 style={{ margin: 0, padding: 0,  color: '#BEB7B1', textDecoration: 'underline' }}>PROJECTS (DESIGN AND DEVELOPMENT)</h2>
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
            <h2 style={{ margin: 0, padding: 0, color: '#BEB7B1', textDecoration: 'underline' }}>PROJECTS (PHOTOGRAPHY)</h2>
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
            <h2 style={{ margin: 0, padding: 0, color: '#BEB7B1', textDecoration: 'underline'}}>PROJECTS (MAX)</h2>
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
