import React from "react"
import PropTypes from 'prop-types'

import { 
    Card,
    CardBody,
    CardHeader,
    CardFooter,
    CardTitle,
    CardSubtitle,
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
        <Row>
            <Col>
                <Card className="border-0">
                    <CardBody>
                        <p>
                            <img src={imgUrl} style={{ margin: "2px 10px 0px 0px", borderRadius: "3px" }} with="50" height="50" />
                            <a style={{ textDecoration: "none", color: "#101820" }} href="https://www.github.com">github.com</a>
                        </p>
                        <CardTitle>
                            {title}
                        </CardTitle>
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