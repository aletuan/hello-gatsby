import React from "react"
import Container from "../components/container"
import styles from './about.module.css'
import { FaRocket } from "react-icons/fa";

const User = props => (
    <div className={styles.user}>
        <img src={props.avatar} className={styles.avatar} alt="" />
        <div className={styles.description}>
            <h4 className={styles.username}>{props.username}</h4>
            <p className={styles.excerpt}>{props.excerpt}</p>
        </div>
    </div>
)

export default () => (
    <Container>
        <p>
            Launching blog page <FaRocket size={30} style={{ color: 'black' }} />
        </p>
        <User
            username="Wendy"
            avatar="https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg"
            excerpt="I'm Wendy. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
        />
        <User
            username="Andy"
            avatar="https://s3.amazonaws.com/uifaces/faces/twitter/vladarbatov/128.jpg"
            excerpt="I'm Andy, a vertically aligned type of guy. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
        />
    </Container>
)