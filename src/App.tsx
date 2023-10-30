import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { StartAttempt } from "./components/StartAttempt";
import { TwoDice } from "./components/TwoDice";
import { CycleHoliday } from "./components/CycleHoliday";
import { Counter } from "./components/Counter";
import { DoubleHalf } from "./bad-components/DoubleHalf";
import { ColoredBox } from "./bad-components/ColoredBox";
import { ShoveBox } from "./bad-components/ShoveBox";
import { ChooseTeam } from "./bad-components/ChooseTeam";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UM COS420 with React Hooks and TypeScript
            </header>
            <p>Hello World!</p>
            <p>
                <h1>This text is very large.</h1>
            </p>
            <span>
                <Container>
                    <Row>
                        <Col>
                            <div
                                style={{
                                    width: "200px",
                                    height: "100px",
                                    backgroundColor: "#FF0000"
                                }}
                            />
                            <img
                                src={require("./uni.jpg")}
                                alt="A picture of Uni the cat, from Twitter account @unicouniuni3."
                            />
                        </Col>
                        <Col>
                            <div
                                style={{
                                    width: "200px",
                                    height: "100px",
                                    backgroundColor: "#FF0000"
                                }}
                            />
                            <ol>
                                <li>Milk</li>
                                <li>Tomatoes</li>
                                <li>Bread</li>
                            </ol>

                            <Button onClick={() => console.log("Hello World!")}>
                                Log Hello World
                            </Button>
                        </Col>
                    </Row>
                </Container>
            </span>
            <hr></hr>
            <DoubleHalf></DoubleHalf>
            <hr></hr>
            <ChooseTeam></ChooseTeam>
            <hr></hr>
            <ColoredBox></ColoredBox>
            <hr></hr>
            <ShoveBox></ShoveBox>
            <hr></hr>
            <Counter></Counter>
            <hr />
            <RevealAnswer></RevealAnswer>
            <hr />
            <StartAttempt></StartAttempt>
            <hr />
            <TwoDice></TwoDice>
            <hr />
            <ChangeType></ChangeType>
            <hr />
            <CycleHoliday></CycleHoliday>
        </div>
    );
}

export default App;
