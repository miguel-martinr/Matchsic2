import React, {useState} from 'react';
import { Container, Row, Col, Form, InputGroup } from 'react-bootstrap';
import classes from './EditProfileCard.module.css';
import { MatchsicButton } from '../utils/MatchsicButton';
import {MatchsicProfileImage} from '../utils/MatchsicProfileImage';
import {MatchsicUserInfo} from '../utils/MatchsicCardUserInfo';
import { useAppSelector, useAppDispatch } from '../store/hooks';
import { Link, useNavigate } from 'react-router-dom';
import { useFormFields } from '../../utilities/form-hooks';
import { userService } from '../_services';
import Select from "react-select";
import { update } from 'cypress/types/lodash';
import { updateUser } from '../store/storeSlice';


interface musicValue {
    value: string,
    label: string
}

export const EditProfilePage = () => {
    const { userProfile } = useAppSelector(state => state.matchsic);

    const navigate = useNavigate();

    const dispatch = useAppDispatch();
    const options = [
        { value: "Pop", label: "Pop" },
        { value: "Rock", label: "Rock" },
        { value: "Heavy", label: "Heavy" },
        { value: "Clásica", label: "Clásica" }
    ];
    const values = userProfile.musicPreference.map((music) => {
         return {value: music, label: music }
    });
    //Realizar un nuevo hook llamado formEditprofile

    const [fields_music, setFields_music] = useState(values)

    const [fields_edit, setFields_edit] = useFormFields({
        username: userProfile.username,
        description: userProfile.description,
        name: userProfile.name,
    });

    const handleSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
        ev.preventDefault()
        let result_music: string[] = []
        fields_music.forEach((value) => {
            result_music.push(value.value)
        })
        const userInfo = {
            ...fields_edit,
            "musicPreference" : result_music,
        }
        userService.update(userInfo).then((message) => {
            console.log(message)
            navigate("/profile")
            dispatch(updateUser(userInfo))
        }).catch((err) => {
            console.log(err)
        });
    }

    

    const handleFieldChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
        setFields_edit(ev)
    }

    const handleFieldMusicChange = (music: any) => {
        setFields_music(music)
    }

    return(
    <Container className={classes.mainFrame} fluid>
        <Form onSubmit={handleSubmit}>
            <Row className={classes.BackgroundTopProfile}>
                <Row  className='pt-5'></Row>
                <Row className='pt-5'>
                    <Col className={"ps-4"}>
                        <MatchsicProfileImage alt="User Image" src={'https://thispersondoesnotexist.com/image'}/>
                    </Col>
                    <Col className={"ps-4"}>
                    <MatchsicButton text="Aceptar cambios" className={classes.AcceptBtn} type="submit"></MatchsicButton>
                    </Col>
                </Row>
            </Row>    
            <Row  className='pt-5'></Row>
            <Row  className='pt-5'></Row>
            <Row> 
                    <Col></Col>
                    <Col xs={10}>

                    <Form.Group className="mb-5" controlId="name">
                        <InputGroup hasValidation id="nameInputGroup">
                            <Form.Control
                            type="textarea"
                            placeholder={"Nombre: " + userProfile.name}
                            onChange={handleFieldChange}
                            />
                        </InputGroup>
                    </Form.Group>

                    <Form.Group className="mb-5" controlId="username">
                        <InputGroup hasValidation id="nameInputGroup">
                            <Form.Control
                            type="text"
                            placeholder={"Nombre de usuario: " + userProfile.username}
                            onChange={handleFieldChange}
                            />
                        </InputGroup>
                    </Form.Group>

                    <Form.Group className="mb-5" controlId="description">
                        <InputGroup hasValidation id="nameInputGroup">
                            <Form.Control
                            as="textarea"
                            placeholder={"Descripción: " + userProfile.description}
                            onChange={handleFieldChange}
                            />
                        </InputGroup>
                    </Form.Group>
                    <Select
                        isMulti
                        name="color"
                        options={options}
                        value={fields_music}
                        onChange={handleFieldMusicChange}
                        />
                    
                        <Row  className='pt-5'></Row>
                        <Row  className='pt-5'></Row>
                        <Row  className='pt-5'></Row>
                        <Row  className='pt-5'></Row>
                    </Col>
                    <Col></Col>
            </Row> 
        </Form>
    </Container>
    )
}