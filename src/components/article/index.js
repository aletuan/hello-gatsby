import React from "react"
import PropTypes from 'prop-types'

import { 
    Card,
    CardBody,
    CardHeader,
} from "reactstrap"

const Article =  ({ title, description }) => {
    return (                   
        <Card style={{ margin: "20px"}}>
            <CardHeader>
                {title}
            </CardHeader>
            <CardBody>
                {description}
            </CardBody>
        </Card>                       
    );   
}

Article.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
};

export default Article;