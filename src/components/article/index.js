import React from "react"
import PropTypes from 'prop-types'

import { 
    Card,
    CardBody,
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

const Article =  ({ title, description, imgUrl, sourceUrl }) => {
    return (
        <Card className="border-0">
            <CardBody>    
                <Row>
                    <Col md={{ size: 1 }} style={{ paddingTop: "20px" }} >
                        <img src={imgUrl} style={{ borderRadius: "3px" }} with="50" height="50" />
                    </Col>
                    <Col md={{ size: 11 }} >
                        <p style={{ marginBottom: "0px" }}>
                            <a style={{ textDecoration: "none", color: "#101820" }} href={sourceUrl}>{sourceUrl}</a>
                        </p>
                        <CardTitle>
                            {title}
                        </CardTitle>
                        {description}
                    </Col>
                </Row> 
            </CardBody>
        </Card>                                 
    );   
}

Article.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    imgUrl: PropTypes.string,
};

export default Article;