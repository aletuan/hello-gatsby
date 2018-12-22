import React from "react"
import PropTypes from 'prop-types'

import { 
    Card,
    CardBody,
    CardHeader,
    CardFooter,
    CardTitle,
    Row,
    Col,
} from "reactstrap"

// TODO: Playing button, featuring (author),  meta (discuss, tag)
const Toolbar = () => (
    <CardFooter>
        <a href="#" class="btn btn-primary">Toolbar</a>
    </CardFooter>
)

const Article =  ({ title, description, imgUrl }) => {
    return (
        <Row style={{ marginTop: "10px" }}>
            <Col>
                <Card>
                    <CardBody>
                        <p style={{ alignItems: "center", display: "flex", margin: "0 0 10px" }}>
                            <img src={imgUrl} style={{ margin: "2px 10px 10px 0px", borderRadius: "3px" }} with="50" height="50" />
                            <a style={{ textDecoration: "none", color: "#101820" }} href="https://www.github.com">github.com</a>
                        </p>
                        <h2 style={{ fontSize: "1.25rem", lineHeight: "1.25rem", margin: "10px 0"}} >{title}</h2>
                        {description}
                    </CardBody>
                    <Toolbar />
                </Card>
            </Col>
        </Row>                                       
    );   
}

Article.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    imgUrl: PropTypes.string,
};

export default Article;