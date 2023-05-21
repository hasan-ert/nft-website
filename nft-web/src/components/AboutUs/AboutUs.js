import React from "react";
import { Container } from "react-bootstrap";
import Blob from "../Blob/Blob";
import { Col, Row } from "react-bootstrap";

// style
import "./AboutUs.scss";
export default function AboutUs() {
    return (
        <>
            <Container fluid id="aboutus-main-container">
                <Container className="about-us-card">
                    <Row>
                        <Col xs={12} className="blob-col">
                            <Blob />
                        </Col>
                        <Col xs={12}>
                            <h1>AI Assistant</h1>
                        </Col>
                        <Col xs={12}>
                            <h3>A tool to make things much more clear</h3>
                        </Col>
                        <Col xs={12}>
                            <p>
                                Etiam tristique odio in diam semper pellentesque
                                nec ut nunc. Praesent non ornare sem, vel mattis
                                dolor. Sed efficitur mauris neque, non vehicula
                                felis placerat et. Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit. Sed sollicitudin ut
                                leo vitae pharetra. Interdum et malesuada fames
                                ac ante ipsum primis in faucibus. Ut bibendum,
                                erat eget ultrices faucibus, neque diam
                                condimentum elit, eget vulputate enim risus sed
                                mi. Nunc eget dignissim orci. Vestibulum pretium
                                non erat in vestibulum. Etiam tristique odio in
                                diam semper pellentesque nec ut nunc. Praesent
                                non ornare sem, vel mattis dolor. Sed efficitur
                                mauris neque, non vehicula felis placerat et.
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Sed sollicitudin ut leo vitae
                                pharetra. Interdum et malesuada fames ac ante
                                ipsum primis in faucibus. Ut bibendum, erat eget
                                ultrices faucibus, neque diam condimentum elit,
                                eget vulputate enim risus sed mi. Nunc eget
                                dignissim orci. Vestibulum pretium non erat in
                                vestibulum.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </>
    );
}
