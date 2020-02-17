import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container'


function AboutUsComp() {
    return <>
        <Jumbotron fluid>
            <Container>
                <div className="about-us">
                    <h1>Rohit Azad - Front End Developer</h1>
                    <p>
                        I’m a User Interface Developer with about 9 years of experience. I like to work with passion for building cutting-edge, rich user interface with a nice coding standard and keep W3C web-standard in mind.
    </p>
                </div>
            </Container>
        </Jumbotron>
    </>
}

export default AboutUsComp;