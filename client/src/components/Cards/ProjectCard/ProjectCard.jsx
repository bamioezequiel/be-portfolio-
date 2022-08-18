import React from 'react'
import s from './ProjectCard.module.css';

export default function ProjectCard({ title, image, urlProject }) {
    return (
        <div className={s.card_container}>
            <a className={s.card_link} href={urlProject} target='_blank'></a>
                <img src={image} className={s.card_image} alt="not found" />
            
            <div className={s.card_content}>
                <p>{title}</p>
            </div>
        </div>
    )
}