import React from 'react';

const projects = [
    {
        name: "Mapping Intercepted Radio Communication",
        link: "https://arcg.is/Su81O0",
        role: "Designer and Developer",
        year: "2024",
        description: "StoryMap website. Final project for DGAH 210: Spatial Humanities."
    },
    // Add more project objects here...
];

function Code() {
    return (
        <div style={{ textAlign: 'right', alignItems: 'flex-start', left: '200px'}}>
            <h1 style={{ padding: '10px'}}><a style={{ color: 'blue'}} href='work'>work</a></h1>
                
            <div>
                <ul style={{ textAlign: 'right', listStyleType: 'none', paddingLeft: '200px', paddingRight: '10px'}}>
                    {projects.map((project, index) => (
                        <li key={index}>
                            <p style={{ margin: '0'}}><a className="hover-effect" href={project.link}>{project.name}</a></p>
                            <p style={{ margin: '0', paddingBottom: '50px'}}>
                                <b>{project.role} / {project.year} <br/></b>
                                {project.description}
                            </p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Code;
