import React from 'react';
import './About.css';
import Fade from 'react-reveal/Fade';

const About = () => {
    return (
        <div id="about">
            <h1>Knowledge</h1>
            <Fade left cascade>
            <div className="about-container">
            <div className="about-wrapper">
                <img src="./pics/ui.jpg" alt=""></img>
                    <p>Experience in<strong> UI </strong>and <strong> UX </strong>design using Photoshop and
                                Illustrator.<br></br></p>
            </div>
            <div className="about-wrapper">
                <img src="./pics/css.jpg" alt=""></img>            
                    <p>Talented in design patterns and passionate on coming with new innovative <strong>CSS</strong>
                                designs.<br></br><br></br></p>         
            </div>
            <div className="about-wrapper">
                <img src="./pics/focus.jpg" alt=""></img>           
                    <p>Ability to produce quality work products with attention to detail.<br></br></p>          
            </div>
            <div className="about-wrapper">
                <img src="./pics/clean.jpg" alt=""></img>
                <p>The ability to write clean, maintainable code, using standard design patterns to good effect.</p>
            </div>
            <div className="about-wrapper">
                <img src="./pics/jquery.jpg" alt=""></img>
                <p><strong>JAVASCRIPT</strong>- knowledge of JavaScript programming skills and libraries.<br></br></p>
            </div>
            <div className="about-wrapper">
                <img src="./pics/frameworks.jpg" alt=""></img>
                <p>Knowledge of making user friendly websites using <strong>Bootstrap</strong> ,
                                <strong>Foundation</strong> and <b>Bulma</b> front-end frameworks.<br></br></p>
            </div>
            <div className="about-wrapper">
                <img src="./pics/Cpanel.jpg" alt=""></img>
                <p>Understanding of acquiring and using domain, hosting, cPanel.<br></br></p>
            </div>
            <div className="about-wrapper">
                <img src="./pics/SSL.jpg" alt=""></img>
                <p> Knowledge of <strong>SSL</strong> certification.<br></br></p>
            </div>
            <div className="about-wrapper">
                <img src="./pics/windows.png" alt=""></img>
                <p>
                    Vast experience in Windows systems.
                            </p>
            </div>
            <div className="about-wrapper">
                <img src="./pics/SEO.jpg" alt=""></img>
                <p>
                    Knowledge and understanding of web servers, analytics and <strong>SEO.</strong>
                </p>
            </div>
            <div className="about-wrapper">
                <img src="./pics/Motivation.jpg" alt=""></img>
                <p>
                    Highly self-motivated and adaptable to learning and understanding new technologies.
                            </p>
            </div>
            <div className="about-wrapper">
                <img src="./pics/design fuels.png" alt=""></img>
                <p>
                    Understanding of great design fuels an excellent user experience.
                            </p>
                </div>
                </div>
                </Fade>
           </div>
    )
}

export default About;