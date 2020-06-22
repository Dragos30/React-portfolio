import React from 'react';
import "animate.css/animate.min.css";
import Fade from 'react-reveal/Fade';
import './Portfolio.css';

const Portfolio = () => {
    return <div id="portfolio" className="transbox">
             <h1>Portfolio</h1>
            <h2>Here you have my projects representing my experience as a web developer and web designer:</h2>
        <h3>Along the path of completing the <b>Modern React with Redux (2020 update)</b>Udemy course by <b>Stephen Grider</b> I have created multiple apps and
    I would like to present them to you.</h3>
        <Fade left cascade>
            <div className="wrapper-div">
            <div className="wrapper-container"> 
                <div className="wrapper">
                    <a> <img src="images search app.jpg" width="100%" alt="search"></img></a>
                </div>
                <div className="wrapper">
                    <h5>React image search app-sending an api request to unsplash, and retreaving the pictures requested.</h5>
                        <button className=" button"><a href="https://github.com/Dragos30/React-image" rel="noopener noreferrer" target="_blank" className="fa fa-github"><h4></h4></a></button>
                </div>
            </div>
            <div className="wrapper-container">
                <div className="wrapper">
                    <a><img src="tasks add app.jpg" width="100%" alt="add"></img></a>
                </div>
                <div className="wrapper">
                    <h5>React tasks list app-adding to do tasks an deleting on click with discret visual animations</h5>
                    <button className=" ui red button">
                            <a href="https://github.com/Dragos30/React-to-do" rel="noopener noreferrer" target="_blank" className="fa fa-github"><h4></h4></a>
                    </button>
                </div>
            </div>
            <div className="wrapper-container">
                <div className="wrapper">
                    <h5>React songs app- a list of songs with descriptions</h5>
                    <button className=" ui red button">
                            <a href="https://github.com/Dragos30/React-songs" rel="noopener noreferrer" target="_blank" className="fa fa-github"><h4></h4></a>
                    </button>
                </div>
                <div className="wrapper">
                    <a> <img src="songs app.jpg" width="100%" alt="songs">
                    </img></a>
                </div>
            </div>
            <div className="wrapper-container">
                <div className="wrapper">
                    <a> <img src="seasons app.jpg" width="100%" alt="app">
                    </img></a>
                </div>
                <div className="wrapper">
                    <h5>React seasons app- identifying your IP location and showing your weather status winter/summer</h5>
                    <button className=" ui red button">
                            <a href="https://github.com/Dragos30/React-seasons" rel="noopener noreferrer" target="_blank" className="fa fa-github"><h4></h4></a>
                    </button>
                </div>
            </div>
            <div className="wrapper-container">
                <div className="wrapper">
                    <h5>React videos app- sending an API request via ajax from react to youtube, displaying the requested videos and details</h5>
                    <button className=" ui red button">
                            <a href="https://github.com/Dragos30/React-videos" rel="noopener noreferrer" target="_blank" className="fa fa-github"><h4></h4></a>
                    </button>
                </div>
                <div className="wrapper">
                    <a><img src="videos app.jpg" width="100%" alt="videos">
                    </img></a>
                </div>
            </div>
            <div className="wrapper-container">
                <div className="wrapper">
                    <a> <img src="screen1.jpg" width="100%" alt="e-commerce"></img></a>
                </div>
                <div className="wrapper">
                    <h5>I present to you the redesign of my first e-commerce website. Framework: Bulma-modal, language: jQuery, fully responsive.</h5>
                    <button className=" ui red button">
                        <a href="https://github.com/Dragos30/ArtShop-Redesign-bulma-modal-implementation-" rel="noopener noreferrer" target="_blank" className="fa fa-github"><h4></h4></a>
                    </button>
                </div>
            </div>
            <div className="wrapper-container">
                <div className="wrapper">
                    <h5>The "Skype" redesigned. The design is inspired by a picture on behance.</h5>
                    <button className="ui red button">
                        <a href="https://github.com/Dragos30/Skype-redesigned" rel="noopener noreferrer" target="_blank" className="fa fa-github"><h4></h4></a>
                    </button>
                </div>
                <div className="wrapper">
                    <a><img src="Skype 3.png" width="100%" alt="skype">
                    </img></a>
                </div>
            </div>
            <div className="wrapper-container">
                <div className="wrapper">
                    <a> <img src="finitdev.jpg" width="100%" alt="finit">
                    </img></a>
                </div>
                <div className="wrapper">
                    <h5>This is my Finit LTD company website.</h5>
                    <button className=" ui red button">
                        <a href="http://www.finitdev.com/" rel="noopener noreferrer" target="_blank" className="fa fa-external-link"><h4></h4></a>
                    </button>
                </div>
                </div>
            </div>
        </Fade>
    </div>

}
export default Portfolio;
