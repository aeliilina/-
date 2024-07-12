import { Title, Subtitle } from "../UI"
import Container from '../Container'
import classes from './VideoBlock.module.scss'
import React from 'react'
import ReactPlayer from 'react-player'

export default function VideoBlock() {


    return (
        <Container>
            <div className={classes.wrapper}>
                <Title>We are Createx Construction Bureau</Title>
                <Subtitle>We are rightfully considered to be the best construction company in the USA.</Subtitle>
                <ReactPlayer url='https://www.youtube.com/watch?v=4RbTFnfvIys' />
            </div>
        </Container>
    )
}
