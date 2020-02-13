import React from "react";
import "font-awesome/css/font-awesome.min.css";

class SocailListCom extends React.Component {
  render() {
    return (
      <>
        <h5 className="heading5">Follow Us</h5>

        <ul className="socialIcon">
          <li title="Find Us on Google Plus">
            <a
              rel="noopener noreferrer"
              href="https://plus.google.com/111154228660835588284/posts"
              target="_blank"
            >
              <span className="fa fa-google"></span>
            </a>
          </li>
          <li title="Find Us on Facebook">
            <a
              rel="noopener noreferrer"
              href="https://www.facebook.com/IamRohitAzad"
              target="_blank"
            >
              <span className="fa fa-facebook"></span>
            </a>
          </li>
          <li title="Find Us on Twitter">
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://twitter.com/rohitazad"
            >
              <span className="fa fa-twitter"></span>
            </a>
          </li>
          <li title="Find Us on Linkedin">
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="http://in.linkedin.com/in/rohitazad"
            >
              <span className="fa fa-linkedin"></span>
            </a>
          </li>
          <li title="Find Us on StackOverflow">
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="http://stackoverflow.com/users/1365428/rohit-azad"
            >
              <span className="fa fa-stack-overflow"></span>
            </a>
          </li>
          <li title="Find Us on GitHub">
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://github.com/rohitazad"
            >
              <span className="fa fa-github-square"></span>
            </a>
          </li>
        </ul>
      </>
    );
  }
}

export default SocailListCom;
