import React from 'react'
import {Card, Row, Col} from 'react-bootstrap';

const TextMuted = {
  fontWeight: '400',
  color: 'hsl(0, 0%, 59%)',
}

const TextBold = {
  fontSize: '18px',
  fontWeight: '700',

}



interface MatchsicMusicalRoundProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    music: string
}




export const MatchsicMusicalRound = (props: MatchsicMusicalRoundProps) => {
  
  const{music} = props;
  let color;
  switch (music) {
      case "Pop":
        color = '#D166EE'
        break;

    case "Rock":
        color = '#3D7CC9'
        break;
    
      default:
          color = '#EEC566'
          break;
  }

  const style = {
      backgroundColor: color,
      border: '2px rgb(0, 0, 0) solid',
      borderRadius: '15px',
      textAlign: 'center',
      margin: '5px',
      boxShadow: '0 5px 10px 0 rgba(0, 0, 0, 0.2)',
  }

  return (
    <Col style={style}>
        {music}
    </Col>
  )
}