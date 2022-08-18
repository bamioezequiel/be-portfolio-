import React from 'react'
import ProjectCard from '../Cards/ProjectCard/ProjectCard';
import s from './Projects.module.css';

export default function Projects() {
    return (
        <div className={s.projects_container}>
            <ProjectCard title='Food App' urlProject='https://pi-food-bamio-ezequiel.vercel.app/' image='https://imgur.com/dbhMn9i.jpg' />
            <ProjectCard title='HenryTravel' urlProject='https://proyecto-final-henry.vercel.app/' image='https://imgur.com/TFvrHc1.jpg' />
        </div>
    )
}