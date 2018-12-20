import React from 'react'
import { Container, Card, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap'
import Link from 'gatsby-link'
import Layout from '../components/layout'

export default () => (
    <Layout>
        <Container>
            <Card style={{marginBottom: 10}} key={12}>
              <CardBody>
                <CardTitle><Link to="/">Home</Link></CardTitle>
                <CardSubtitle style={{marginBottom: 10}}>21/12/2018</CardSubtitle>
                <CardText>Andy test</CardText>
              </CardBody>
            </Card>
        </Container>
    </Layout>
}
