import React from 'react'
import {Card, Row, Col} from 'react-bootstrap';
import {MatchsicMusicalRound} from './MatchsicMusicalRound'

const TextMuted = {
  fontWeight: '400',
  color: 'hsl(0, 0%, 59%)',
}

const TextBold = {
  fontSize: '18px',
  fontWeight: '700',

}

interface MatchsicUserProps extends React.HtmlHTMLAttributes<HTMLElement> {
  user: {
    name: string,
    username: string,
    description: string,
    musicPreference: string[],
    socialNetwork: string[],
  }
}




export const MatchsicUserInfo = (props: MatchsicUserProps) => {
  
  const{user} = props;

  return (
    <>
      <Row style={TextBold}>{user.name}</Row>
      <Row style={TextMuted}>{user.username}</Row>
      <Row>
        {user.description}
      </Row>
      <Row style={TextBold}>
        Gustos musicales
      </Row>
      <Row>
        {user.musicPreference.map( (music, index)  => {
           return <MatchsicMusicalRound music={music} key={index}/>
         })}
      </Row>

      <Row style={TextBold}>
          Redes sociales
      </Row>
      <Row>
        {user.socialNetwork.map((social, index) => {
            return <Col key={index}> {social}</Col>
        })}
      </Row>
    </>
  )
}