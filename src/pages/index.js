import React from "react"
import {
    Container,
    Card,
    CardBody,
} from 'reactstrap';

import Layout from '../components/layout';

export default () => (
    <Layout>
        <Container>
            <Card>
                <CardBody>                  
                    <p>
                        Thanks you for visiting. This is my personal website to memo what I learn.
                        I also hope you could find some userful information from here.
                        If you have any feedback, send me an email to <a href="mailto:anhlt1983@gmail.com">anhlt1983@gmail.com</a>
                    </p>
                    <p>
                        <em>
                            The best preparation for tomorrow is doing your best today.
                        </em>
                        <br />
                        <b style={{ float: `right` }}>H. Jackson Brown, Jr.</b>                                   
                    </p>
                </CardBody>
            </Card>
        </Container>
    </Layout>
)