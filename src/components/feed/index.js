import React from "react"
import { 
    Container,
} from "reactstrap"

import Article from  '../article';

export default () => {
    return (                   
        <Container>
            <Article 
                title="Jumping off the Edge into Chromium" 
                description="Nick, KBall, and Chris respond to follow up on the State of JavaScript survey, discuss Chromium, Edge, and the future of the web, and reminisce about the past year in the final JS Party" 
                imgUrl="https://cdn.changelog.com/uploads/icons/topics/jq0/icon_small.png"
            />                      
            <Article 
                title="Brave's new BAT tipping banner for creators" 
                description="Good news! The new Brave tipping banner is now available with the latest desktop browser update. This new banner makes the experience of tipping your favorite Brave-verified" 
                imgUrl="https://cdn.changelog.com/uploads/icons/topics/4Q/icon_small.png"
            />                      
        </Container>
    );   
}