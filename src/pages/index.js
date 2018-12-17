import React from "react"
import { Link } from "gatsby"
import Header from '../components/header'

export default () => (
    <div style={{ color: `purple` }}>
        <Link to="/about">About</Link> _/\_/\_/\_ 
        <Link to="/contact">Contact</Link>
        <Header headerText="Index header" />
        <div>Index page content.</div>
    </div>
)
