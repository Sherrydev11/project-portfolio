
import arrow from "../assets/arrow.svg";
import profile from "../assets/selfie.jpg";


export const Intro = () => {
    return (
        <section className="intro">
            <h1 className="name">Hi, Im Sherry Isola</h1>
            <p className="role">Frontend Developer</p>
            <img className="avatar" src={profile} alt="Sherry" />
            <p>I am an HR and Talent Acquisition professional with a passion for technology and front-end web development. My career in HR has honed my skills in communication, relationship-building, and understanding people—qualities that I believe are just as essential in creating great digital experiences. Alongside my work in HR, I have developed a strong interest in coding, particularly in building visually engaging and user-friendly websites.

                I am currently working in my skills in HTML, CSS, JavaScript, and React, and I enjoy applying these skills to bring ideas to life online. I’m curious by nature and continuously seek opportunities to expand my technical knowledge, refine my problem-solving abilities, and explore innovative solutions. My unique blend of people-centric expertise and technical creativity allows me to bridge the gap between human needs and digital solutions.

            </p>
            <img className="arrow" src={arrow} alt="arrow to show to scroll down" />
        </section>
    );
};
