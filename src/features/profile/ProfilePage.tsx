import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import classes from './ProfileCard.module.css';
import { MatchsicButtonLinkto } from '../utils/MatchsicButtonLinkto';
import {MatchsicProfileImage} from '../utils/MatchsicProfileImage';
import {MatchsicUserInfo} from '../utils/MatchsicCardUserInfo';
import { useAppSelector } from '../store/hooks';
import { MatchsicButton } from '../utils/MatchsicButton';
import { userService } from '../_services/user';

interface userProfile {
    name :string,
    nickname :string,
    description :string,
    music :string[],
    social :string[],
}



export const ProfilePage = () => {

    const { userProfile } = useAppSelector(state => state.matchsic);

    return(
    <Container className={classes.mainFrame} fluid>
        <Row className={classes.BackgroundTopProfile}>
            <Row  className='pt-5'></Row>
            <Row className='pt-5'>
                <Col className={"ps-4"}>
                    <MatchsicProfileImage alt="User Image" src={'https://thispersondoesnotexist.com/image'}/>
                </Col>
                <Col className={"ps-4"}>
                    <MatchsicButtonLinkto linkto="/editprofile" text={"Editar Perfil"} className={classes.ButtonEditProfile}></MatchsicButtonLinkto>
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
                <Col>
                <MatchsicButton 
                  text={"Conectar Spotify"} 
                  className={classes.ButtonConnectSpotify} 
                  onClick={() => {userService.connectSpotify()}}
                />
                </Col>
        </Row> 
    </Container>
    )
}