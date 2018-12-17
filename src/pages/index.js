import React from "react"
import { Link } from "gatsby"
import Header from '../components/header'
import Container from '../components/container'

export default () => (
    <Container>
        <Link to="/about">About</Link> _/\_/\_/\_ 
        <Link to="/contact">Contact</Link>
        <Header headerText="Index header" />
        <div>
            <p>
                Index page content [dummy]
            </p>
            <blockquote>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    <em>
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </em>
                </p>
            </blockquote>
        </div>
    </Container>
)
