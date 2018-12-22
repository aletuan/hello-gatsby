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

import { 
    isBrowser,
}
from "react-device-detect"


// TODO: Playing button, featuring (author),  meta (discuss, tag)
const Toolbar = () => (
    <CardFooter>
        <a href="#" class="btn btn-primary">Toolbar</a>
    </CardFooter>
)

const Article =  ({ title, description, imgUrl, sourceUrl }) => {
    if (isBrowser) {
        return (
            <Card className="border-0">
                <CardBody>    
                    <Row>
                        <Col md={{ size: 1, offset: 1 }} style={{ paddingTop: "20px" }} >
                            <img src={imgUrl} style={{ borderRadius: "3px" }} with="50" height="50" />
                        </Col>
                        <Col md={{ size: 8 }} >
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

    return (
        <Card className="border-0">
            <Row>
                <CardBody>
                <p style={{ marginBottom: "0px" }}>
                    <img src={imgUrl} style={{ borderRadius: "3px", paddingRight: "10px", marginTop: "10px" }} with="30" height="30" />
                    <a style={{ textDecoration: "none", color: "#101820" }} href={sourceUrl}>{sourceUrl}</a>
                </p>
                <h5>{title}</h5>
                {description}                    
                </CardBody>
            </Row> 
        </Card>            
    )
}

Article.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    imgUrl: PropTypes.string,
};

export default Article;