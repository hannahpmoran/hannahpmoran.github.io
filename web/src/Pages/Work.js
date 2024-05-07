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
        role: "Designer and Developer",
        year: "2023"
    },
    {
        name: "Ivy",
        link: "https://github.com/hannahpmoran/cs232/tree/main/ivy#ivy",
        role: "Designer, Developer, Sculptor",
        year: "2023"
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
        role: "Designer, Developer, Sculptor",
        year: "2023"
    },
    {
        name: "intiMET",
        link: "https://github.com/hannahpmoran/cs257/tree/main/webapp#intimet",
        role: "Designer, Developer, Sculptor",
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
        role: "Photographer",
        year: "2022"
    },
    {
        name: "Boggle",
        link: "https://github.com/hannahpmoran/cs111/tree/main/boggle#bogglepy",
        role: "Designer and Developer",
        year: "2021"
    }
];

function Code() {
    return (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.9, ease: 'easeInOut' }}
            >

        <div style={{ textAlign: 'right', alignItems: 'flex-start', left: '200px'}}>
            <h1 style={{ padding: '10px'}}><a style={{ color: 'blue'}} href='work'>work</a></h1>
                
            <div>
                <ul style={{ textAlign: 'right', listStyleType: 'none', paddingLeft: '200px', paddingRight: '10px'}}>
                    {projects.map((project, index) => (
                        <li key={index}>
                            <p style={{ margin: '0'}}><a className="hover-effect" href={project.link}>{project.name}</a></p>
                            <p style={{ margin: '0', paddingBottom: '50px'}}>
                                <b>{project.role} / {project.year} </b>
                            </p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>

        </motion.div>
    );
}

export default Code;
