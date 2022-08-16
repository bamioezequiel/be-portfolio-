import React from 'react'
import s from './ProjectCard.module.css';

export default function ProjectCard({ title, image, urlProject }) {
    return (
        <div className={s.card_container}>
            <a href={urlProject} target="_blank" rel="noopener noreferrer">
                <img src={image} className={s.card_image} alt="not found" />
                {/* <div className={s.card_content}>
                    <h2>{title}</h2>
                </div> */}
            </a>
        </div>
    )
}