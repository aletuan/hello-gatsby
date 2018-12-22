import React from "react"
import PropTypes from 'prop-types'

import { 
    Card,
    CardBody,
} from "reactstrap"

const Article =  ({ title }) => {
    return (                   
        <Card style={{ margin: "20px"}}>
            <CardBody>
                {title}
            </CardBody>
        </Card>                       
    );   
}

Article.propTypes = {
    name: PropTypes.string
};

export default Article;