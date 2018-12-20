import React from "react"
import Layout from '../components/layout'
import { Container, Button, Jumbotron } from "reactstrap"

export default () => (
    <Layout>
        <Container>
            <Jumbotron>
            <h1>Hello, world!</h1>
            <p>
                This is a simple hero unit, a simple jumbotron-style component for calling
                extra attention to featured content or information.
            </p>
            <p>
                <Button color="danger">
                    Learn more
                </Button>
            </p>
            </Jumbotron>
        </Container>
    </Layout>
)