import React from 'react';
import "animate.css/animate.min.css";
import Fade from 'react-reveal/Fade';
import './Contact.css';

const Contact = () => {
    return (
        <div id="contact">
            <h1>Get in touch</h1>
                <h3>Hope to meet you soon!</h3>
                <p id="mail"><i className="fa fa-envelope">dragosghita02@gmail.com</i></p>
            <br></br>
            <Fade left cascade>
                <div id="links">
                    <a id="link1" href="https://www.linkedin.com/in/dragos-ghita-006252173/" className="fa fa-linkedin" > </a>
                    <a id="link2" href="https://github.com/Dragos30"
                        className="fa fa-github"></a>
                    <a id="link3" href="https://www.behance.net/ghitad"
                        className="fa fa-behance"></a>
                    <a id="link4" href="https://codepen.io/Dragos2"
                        className="fa fa-codepen"></a>
                </div>
            </Fade>
        </div>

    );
}
export default Contact;


