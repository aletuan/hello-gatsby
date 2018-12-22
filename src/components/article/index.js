import React from "react"
import PropTypes from 'prop-types'

import { 
    Card,
    CardBody,
    CardHeader,
    CardFooter,
} from "reactstrap"

// TODO: Playing button, featuring (author),  meta (discuss, tag)
const Toolbar = () => (
    <CardFooter>
        <a href="#" class="btn btn-primary">Go somewhere</a>
    </CardFooter>
)

const Article =  ({ title, description }) => {
    return (                   
        <Card style={{ margin: "20px"}}>
            <CardHeader>
                {title}
            </CardHeader>
            <CardBody>
                {description}                
            </CardBody>
            <Toolbar />
        </Card>                       
    );   
}

Article.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
};

export default Article;