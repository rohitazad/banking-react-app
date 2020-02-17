import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import SocailListCom from "./SocailList";
import ShareCommonCom from "../../ShareCommon/SharePage/index";

class FooterIndex extends React.Component {
  render() {
    return (
      <>
        <footer>
          <section className="footer-top">
            <Container>
              <Row>
                <Col>
                  <ShareCommonCom />
                </Col>
              </Row>
              <Row>
                <Col>
                  <SocailListCom />
                  <hr className="foo-hr" />
                </Col>
              </Row>
              <Row>
                <Col>
                  <p className="fo-text">
                    Copyright © 2020. All right reserved.
                    <strong>Disclaimer</strong>
                    Design &amp; Develop By :
                    <a
                      rel="noopener noreferrer"
                      title="Check Rohit Azad Site"
                      href="http://rohitazadmalik.blogspot.com/"
                      target="_blank"
                    >
                      Rohit Azad Malik
                    </a>
                  </p>
                </Col>
              </Row>
            </Container>
          </section>
        </footer>
      </>
    );
  }
}

export default FooterIndex;
