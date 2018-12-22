import React from "react"
import { 
    Container,
} from "reactstrap"

import Article from  '../article';

export default () => {
    return (                   
        <Container style={{ marginTop: "20px" }}>
            <Article title="Something" />                      
            <Article title="Beautiful" />                      
        </Container>
    );   
}