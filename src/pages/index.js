import React from "react"
import {
    Container,
    Jumbotron,
} from 'reactstrap';
import { FaBeer } from "react-icons/fa";

import Layout from '../components/layout';

export default () => (
    <Layout>
        <Container>
            <Jumbotron>
                <p className="lead">
                    Good day, <FaBeer size={30} style={{ color: 'black' }} />
                </p>
                <p>
                    Thanks you for the visiting. This is my personal website. 
                    It is a memo what I learn from software development, and other non-technical stuffs.
                    However, I also hope you could find some userful information from here.
                    If you have any feedback, drop me a message or send me an email to <a href="mailto:anhlt1983@gmail.com">anhlt1983@gmail.com</a>
                </p>
                <p>
                    <em>
                        The best preparation for tomorrow is doing your best today.
                    </em>
                    <br />
                    <b style={{ float: `right` }}>H. Jackson Brown, Jr.</b>                                   
                </p>
            </Jumbotron>
        </Container>
    </Layout>
)