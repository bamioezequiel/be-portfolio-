import React from 'react'
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import s from './Home.module.css';

export default function Home() {
    return (
        <div className={s.home_container}>
            <div className={s.hero_container}>
                <div>
                    <p className={s.hero_welcome}>
                        Hi! <img src="https://raw.githubusercontent.com/rajput2107/rajput2107/master/Assets/Hi.gif" width="40px" /> 
                    </p>
                    <h2 className={s.hero_name}>I'm Bamio Ezequiel,</h2>
                    <p className={s.hero_fullstack}>Full Stack Web Developer</p>
                    <div className={s.hero_social}>
                        <BsGithub className={s.hero_social_icon} />
                        <BsLinkedin className={s.hero_social_icon} />
                    </div>
                </div>
                {/* <div className={s.hero_content}>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam rerum quae dignissimos provident quas, nostrum, est ipsum non dicta inventore, hic alias at impedit dolores blanditiis nulla eaque necessitatibus doloribus!
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam rerum quae dignissimos provident quas, nostrum, est ipsum non dicta inventore, hic alias at impedit dolores blanditiis nulla eaque necessitatibus doloribus!
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam rerum quae dignissimos provident quas, nostrum, est ipsum non dicta inventore, hic alias at impedit dolores blanditiis nulla eaque necessitatibus doloribus!
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam rerum quae dignissimos provident quas, nostrum, est ipsum non dicta inventore, hic alias at impedit dolores blanditiis nulla eaque necessitatibus doloribus!
                </div> */}
            </div>
        </div>
    )
}