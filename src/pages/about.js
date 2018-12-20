import React from "react"
import { FaRocket } from "react-icons/fa";
import { Container } from "reactstrap"
import Layout from '../components/layout'

export default () => (
    <Layout>
        <Container>
            <p>
                Launching blog page <FaRocket size={30} style={{ color: 'black' }} />
            </p>
        </Container>
    </Layout>
)