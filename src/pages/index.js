import React from "react"

import Layout from '../components/layout';
import Banner from '../components/banner';
import Feed from '../components/feed';

export default () => {
    return (   
        <Layout>
            <Banner />
            <Feed />
        </Layout> 
    );   
}