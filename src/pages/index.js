import React from "react"
import {
    Container,
    Jumbotron, 
    Button,
} from 'reactstrap';

import Layout from '../components/layout';

export default () => (
    <Layout>
        <Container>
            <Jumbotron>
                <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
                <hr className="my-2" />
                <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                <p className="lead">
                    <Button color="primary">Learn More</Button>
                </p>
        </Jumbotron>
        </Container>
    </Layout>
)