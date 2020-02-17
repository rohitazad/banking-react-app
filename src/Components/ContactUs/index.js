import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBuilding,
  faMapMarkerAlt,
  faMobile,
  faEnvelope,
  faBlog
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faLinkedinIn,
  faGithub,
  faStackOverflow
} from "@fortawesome/free-brands-svg-icons";

const contactArray = [
  { icon: faBuilding, hasLink: false, title: "Times Internet (TIL)" },
  { icon: faMapMarkerAlt, hasLink: false, title: "New Delhi, India" },
  { icon: faMobile, hasLink: false, title: "+91-9953 8787 27" },
  { icon: faEnvelope, haslink: false, title: "ram9953878727@gmail.com" },
  {
    icon: faFacebook,
    hasLink: true,
    title: "Find us on facebook",
    link: "https://www.facebook.com/IamRohitAzad"
  },
  {
    icon: faTwitter,
    hasLink: true,
    title: "Find us on twitter",
    link: "https://twitter.com/rohitazad"
  },
  {
    icon: faLinkedinIn,
    hasLink: true,
    title: "Find us on linkedin",
    link: "http://in.linkedin.com/in/rohitazad"
  },
  {
    icon: faStackOverflow,
    hasLink: true,
    title: "Find us on stackOverFlow",
    link: "https://stackoverflow.com/users/1365428/rohit-azad"
  },
  {
    icon: faGithub,
    hasLink: true,
    title: "Find us on github",
    link: "https://github.com/rohitazad"
  },
  {
    icon: faBlog,
    hasLink: true,
    title: "Find us on blogger",
    link: "http://rohitazadmalik.blogspot.com/"
  }
];
const ContatUsIndexComp = props => {
  return (
    <>
      <Container>
        <Row className="mT20 mB20">
          <Col>

            <Card>
              <Card.Header>Contact us</Card.Header>
              <ListGroup variant="flush">
                {contactArray.map((item, index) => {
                  return (
                    <ListGroup.Item key={item.title}>
                      <span className="icon-sec">
                        <FontAwesomeIcon icon={item.icon} />
                      </span>
                      <span className="icon-text">
                        {item.hasLink === true ? (
                          <>
                            <a
                              href={item.link}
                              rel="noopener noreferrer"
                              target="_blank"
                              title={item.title}
                            >
                              {item.title}
                            </a>
                          </>
                        ) : (
                            item.title
                          )}
                      </span>
                    </ListGroup.Item>
                  );
                })}
              </ListGroup>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ContatUsIndexComp;