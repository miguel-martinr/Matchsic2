import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import classes from './ProfileCard.module.css';
import { MatchsicButton } from '../MatchsicButton';
import {MatchsicProfileImage} from '../MatchsicProfileImage';
import {MatchsicUserInfo} from '../MatchsicCardUserInfo';


export const ProfilePage = () => {

    const user = {
        name: "Pedro Guillermo",
        nickname: "Mordor1110",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt a unde eum. Quaerat dolor unde saepe laudantium incidunt alias, architecto quidem fuga optio, blanditiis, tempora voluptates qui debitis veritatis hic.",
        music: ["Rock", "Metal"],
        social: ["Twitter", "Facebook", "Instagram"],
    }

    let content = (
        
    <Container className={classes.mainFrame}>
        <Row className={classes.BackgroundTopProfile}>
                <Row  className='pt-5'></Row>
                <Row className='pt-5'>
                    <Col className={"ps-4"}>
                        <MatchsicProfileImage alt="User Image" src={'https://thispersondoesnotexist.com/image'}/>
                    </Col>
                    <Col className={"ps-4"}>
                        <MatchsicButton text={"Editar Perfil"} className={classes.ButtonEditProfile}></MatchsicButton>
                    </Col>
                </Row>
            </Row>


            <Row  className='pt-5'></Row>
            <Row  className='pt-5'></Row>
            <Row> 
                <Col></Col>
                <Col xs={10}>

                    <MatchsicUserInfo user={user}/>
                 
                    <Row  className='pt-5'></Row>
                    <Row  className='pt-5'></Row>
                </Col>
                <Col></Col>
            </Row>
    </Container>


    )


    return(content)
}