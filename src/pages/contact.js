import React from "react"
import Container from "../components/container"
import { Button, Jumbotron, Glyphicon } from "react-bootstrap"

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
                <Glyphicon glyph="align-justify" />
                Learn more...
            </Button>
        </p>
        </Jumbotron>
    </Container>
)