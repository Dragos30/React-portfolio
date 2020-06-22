//Dependencies
import React from 'react';
//Internals
import './index.css';
import Flip from 'react-reveal';

const Footer = () => (
  <footer className="footer" id="footer">
    <div id="footer-footer">
      <Flip bottom cascade>
        <img src="/pics/react-logo.png" alt="react" width="50px" height="auto"></img>
        <img src="/pics/bulma-logo.png" alt="react" width="50px" height="auto"></img>
        <img src="/pics/bootstrap.jpg" alt="react" width="50px" height="auto"></img>
        <img src="/pics/CSS3_logo_and_wordmark.svg.png" alt="react" width="auto" height="50px"></img>
        <img src="/pics/jquery-logo.jpg" alt="react" width="50px" height="auto"></img>
        <img src="/pics/logo-javascript.png" alt="react" width="50px" height="auto"></img>
        <img src="/pics/php.png" alt="react" width="50px" height="auto"></img>
        <img src="/pics/html.png" alt="react" width="50px" height="auto"></img>
        <img src="/pics/semantic.png" alt="react" width="50px" height="auto"></img>
        <img src="/pics/windows.png" alt="react" width="50px" height="auto"></img>
      </Flip>
    </div>
    <div className="grid">
      <span>
        <p id="company"> Copyright &copy; 2020 Finit LTD.<br></br> All rights reserved. <br></br>Website by: FinIT LTD<br></br></p>
    </span>
      <img id="footer-image" src="f13.jpg" alt="" width="100px" height="auto"></img>
      </div>
  </footer>
)

export default Footer;
