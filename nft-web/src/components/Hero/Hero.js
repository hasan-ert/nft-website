import React from "react";
import { Col, Row } from "react-bootstrap";
import { Container } from "react-bootstrap";

//style
import "./Hero.scss";

//asset
import banner from "../../assets/banner.webp";
export default function Hero() {
    return (
        <>
            <Container fluid id="hero-main-container">
                <Row className="hero-main-row">
                    <Col md={6} xs={12} className="info-col">
                        <Row>
                            <Col xs={12}>
                                <h1>Hello world</h1>
                            </Col>
                            <Col xs={12}>
                                <h3>We are here to do something cool</h3>
                            </Col>
                            <Col xs={12}>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Quisque dignissim ut ipsum
                                    nec fringilla. Duis purus dui, vehicula in
                                    elementum in, mattis porttitor sapien. Nunc
                                    vulputate ante augue, et rutrum sem
                                    hendrerit sit amet. Morbi id sagittis eros.
                                    In blandit lobortis lectus, nec elementum
                                    elit dictum quis. Proin eget nulla vel magna
                                    ultrices sollicitudin quis quis purus.
                                    Vestibulum id urna in magna accumsan
                                    tincidunt. Mauris vehicula, velit at
                                    tincidunt faucibus, quam orci lacinia
                                    mauris, et condimentum enim nisl id elit. Ut
                                    tincidunt bibendum eleifend. Integer vitae
                                    finibus urna. Vestibulum tempus luctus
                                    commodo.
                                </p>
                            </Col>
                        </Row>
                    </Col>
                    <Col lg={3} md={5} className="image-col">
                        <img src={banner} alt="ai-banner" />
                    </Col>
                </Row>
            </Container>
        </>
    );
}
