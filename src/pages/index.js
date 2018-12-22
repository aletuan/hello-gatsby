import React from "react"

import { 
    BrowserView,
}
from "react-device-detect"

import Layout from '../components/layout';
import Banner from '../components/banner';
import Feed from '../components/feed';

export default () => {
    return (   
        <Layout>
            <Banner />
            <BrowserView>
                <Feed />
            </BrowserView>
        </Layout> 
    );   
}