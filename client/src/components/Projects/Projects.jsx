import React from 'react'
import ProjectCard from '../Cards/ProjectCard/ProjectCard';
import s from './Projects.module.css';

export default function Projects() {
    return (
        <div className={s.projects_container}>
            <ProjectCard title='Food App' image='https://imgur.com/dbhMn9i.jpg' />
            <ProjectCard title='HenryTravel' image='https://imgur.com/VPznMao.jpg' />
        </div>
    )
}