import React from "react"
import { Container, Button, Jumbotron } from "reactstrap"
import Layout from '../components/layout'

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