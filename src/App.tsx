import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UM COS420 with React Hooks and TypeScript - Nick Gauthier
            </header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            <p>Hello World!</p>
            <p>
                <h1>This text is very large.</h1>
            </p>

            <div>
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
            </div>
        </div>
    );
}

export default App;
