import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import classes from './ProfileCard.module.css';
import { MatchsicButton } from '../MatchsicButton';

export const ProfilePage = () => {

    let test = (
        
<>
            <div className={classes.BackgroundTopProfile}>

                <Container>

                    <Row><MatchsicButton text={"Editar Perfil"} className={classes.ButtonEditProfile}></MatchsicButton></Row>
    
                </Container>
                
            </div>
            <div>

                <Card.Img className={classes.ProfileCardImage} alt="User Image" src={'https://thispersondoesnotexist.com/image'}/>
                
            </div>

            <div>
            <Card className={classes.ProfileCard + " mx-auto" + " border-0"} >

                <Card.Body>

                    <Card.Text className={classes.TextBold + " mb-0"}>
                        Pedro Guillermo
                    </Card.Text>

                    <span className={classes.TextMuted + " pl-1"}>Mordor1110</span>

                    <Card.Text>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt a unde eum. Quaerat dolor unde saepe laudantium incidunt alias, architecto quidem fuga optio, blanditiis, tempora voluptates qui debitis veritatis hic.
                    </Card.Text>

                </Card.Body>
  
                <Card.Body >

                    <Card.Text className={classes.TextBold + " mb-0"}>
                        Gustos musicales
                    </Card.Text>

                    <Card.Text>
                       <Container>
                           <Row>
                               <Col className={classes.MusicalRound}>Pop</Col><Col className={classes.MusicalRound}>Rock</Col><Col className={classes.MusicalRound}>Metal</Col><Col className={classes.MusicalRound}>Rock</Col>
                           </Row>
                       </Container>
                    </Card.Text>

                </Card.Body>

                <Card.Body >
                    <Card.Text>
                       <Container>
                           <Row>
                               <Col>Twitter</Col>
                           </Row>
                       </Container>
                    </Card.Text>
                </Card.Body>
            </Card>
            </div>
        </>

    )


    return(test)
}

<>
            <Row className={classes.BackgroundTopProfile}>
                <Row  className='pt-5'></Row>
                <Row className='pt-5'>
                    <Col className={"ps-4"}>
                        <Card.Img className={classes.ProfileCardImage} alt="User Image" src={'https://thispersondoesnotexist.com/image'}/>
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

                  

                    <Card.Body>

                        <Card.Text className={classes.TextBold + " mb-0"}>
                            Pedro Guillermo
                        </Card.Text>

                        <span className={classes.TextMuted + " pl-1"}>Mordor1110</span>

                        <Card.Text>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt a unde eum. Quaerat dolor unde saepe laudantium incidunt alias, architecto quidem fuga optio, blanditiis, tempora voluptates qui debitis veritatis hic.
                        </Card.Text>

                    </Card.Body>

                    <Card.Body >

                        <Card.Text className={classes.TextBold + " mb-0"}>
                            Gustos musicales
                        </Card.Text>

                        <Card.Text>
                        <Container>
                            <Row>
                                <Col className={classes.MusicalRound}>Pop</Col><Col className={classes.MusicalRound}>Rock</Col><Col className={classes.MusicalRound}>Metal</Col><Col className={classes.MusicalRound}>Rock</Col>
                            </Row>
                        </Container>
                        </Card.Text>

                    </Card.Body>

                    <Card.Body >
                        <Card.Text>
                        <Container>
                            <Row>
                                <Col>Twitter</Col>
                            </Row>
                        </Container>
                        </Card.Text>
                    </Card.Body>
                 
                </Col>
                <Col></Col>
            </Row>
        </>