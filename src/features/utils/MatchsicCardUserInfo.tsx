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
    nickname: string,
    description: string,
    music: string[],
    social: string[],
  }
}




export const MatchsicUserInfo = (props: MatchsicUserProps) => {
  
  const{user} = props;

  return (
    <>
      <Card.Text style={TextBold}>{user.name}</Card.Text>

      <span style={TextMuted}>{user.nickname}</span>

      <Card.Text>
          {user.description}
      </Card.Text>

      <Card.Text>
        <Card.Text style={TextBold}>
            Gustos musicales
        </Card.Text>
        <Row>
         {user.music.map( (music)  => {
           return(<MatchsicMusicalRound music={music}/>)
         })}
        </Row>

    </Card.Text>


    <Card.Text>
        <Card.Text style={TextBold}>
            Redes sociales
        </Card.Text>
        <Row>
            {user.social.map((social) => {
              return <Col>{social}</Col>
            })}
        </Row>
    </Card.Text>
    </>
  )
}