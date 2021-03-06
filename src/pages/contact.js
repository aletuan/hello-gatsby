import React from "react"
import Container from "../components/container"
import Button from "react-bootstrap/lib/Button"
import Jumbotron from "react-bootstrap/lib/Jumbotron"

export default () => (
    <Container>
        <Jumbotron>
        <h1>Hello, world!</h1>
        <p>
            This is a simple hero unit, a simple jumbotron-style component for calling
            extra attention to featured content or information.
        </p>
        <p>
            <Button bsStyle="primary">
                Learn more
            </Button>
        </p>
        </Jumbotron>
    </Container>
)