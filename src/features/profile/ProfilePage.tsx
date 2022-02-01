import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import classes from './ProfileCard.module.css';
import { MatchsicButton } from '../utils/MatchsicButton';
import {MatchsicProfileImage} from '../utils/MatchsicProfileImage';
import {MatchsicUserInfo} from '../utils/MatchsicCardUserInfo';
import { useAppSelector } from '../store/hooks';


interface userProfile {
    name :string,
    nickname :string,
    description :string,
    music :string[],
    social :string[],
}



export const ProfilePage = () => {

    const { userProfile } = useAppSelector(state => state.matchsic);
    // const user :userProfile = {
    //     name: "Pedro Guillermo",
    //     nickname: "Mordor1110",
    //     description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt a unde eum. Quaerat dolor unde saepe laudantium incidunt alias, architecto quidem fuga optio, blanditiis, tempora voluptates qui debitis veritatis hic.",
    //     music: ["Rock", "Metal"],
    //     social: ["Twitter", "Facebook", "Instagram"],
    // }

    

    return(
    <Container className={classes.mainFrame} fluid>
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

                    <MatchsicUserInfo user={userProfile}/>
                 
                    <Row  className='pt-5'></Row>
                    <Row  className='pt-5'></Row>
                </Col>
                <Col></Col>
        </Row> 
    </Container>
    )
}