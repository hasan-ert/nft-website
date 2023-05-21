import React from "react";
import { Col, Container, Row } from "react-bootstrap";

//style
import "./Roadmap.scss";
import Blob from "../Blob/Blob";
export default function Roadmap() {
    const milestones = ["Start", "Develop", "Test", "Publish"];

    const create_milestone = (milestone, index) => {
        console.log(index);

        const func = () => {
            if (index === 0) return "first-dot";
            else if (index === milestones.length - 1) return "last-dot";
            else return "dot";
        };
        return (
            <div key={index} className="milestone">
                <Row style={{ width: "100%" }}>
                    <Col xs={8}>
                        <div className="label">
                            <h3>{milestone}</h3>
                            <p>Some dumb explanation</p>
                        </div>
                    </Col>
                    <Col xs={4} className="dot-col">
                        <div className={func()}></div>
                    </Col>
                </Row>
            </div>
        );
    };

    return (
        <>
            <Container id="roadmap-main-container">
                <Row>
                    <Col>
                        <h1>Roadmap</h1>
                    </Col>
                </Row>
                <Row>
                    <Col md={7}>
                        {milestones.map((milestone, index) => {
                            return create_milestone(milestone, index);
                        })}
                    </Col>
                    <Col md={5} className="blob-col">
                        <Row>
                            <Col xs={12} className="blob-wrapper">
                                <Blob
                                    speed={1.5}
                                    canvasWidth="100%"
                                    canvasHeight="400px"
                                />
                            </Col>
                            <Col xs={12}>
                                <h2>Lets talk about something here</h2>
                            </Col>
                            <Col xs={12}>
                                <h4>
                                    But what could it be so that it is long
                                    enough to take some space and help us to
                                    illustrate how it would look like once its
                                    done
                                </h4>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    );
}
