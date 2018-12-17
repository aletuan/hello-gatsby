import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import Container from "../components/container"

export default () => (
    <Container>
        <Link to="/">Home</Link>
        <Header headerText="Contact header." />
        <p>Contact page content</p>
    </Container>
)