import React from 'react'
import {
    Container,
    Card,
    CardBody,
} from 'reactstrap';

const Banner = () => (
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
                    /* 
                        When I wrote this, only God and I understood what I was doing
                        Now, only God knows
                    */
                    </em>                                  
                </p>
            </CardBody>
        </Card>
    </Container>    
)

export default Banner