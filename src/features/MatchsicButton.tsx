import React from 'react'
import { Button } from 'react-bootstrap';

const matchsicButtonStyle = {
  backgroundColor: '#fff',
  color: '#0BA55D',
  borderRadius: '100px',
  border: 'none',
  width: '7em',
  height: '2em',
  fontWeight: 'bold',
}


interface MatchsicButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string,
}


export const MatchsicButton = (props: MatchsicButtonProps) => {
  
  const {text} = props;
  const style = props.style || {};

  const className = (props.className || "") + " rounded-pill pe-2 ps-2 p-1" ;
  return (
    <Button {...props} style={{...matchsicButtonStyle, ...style}} className={className}>
      {text}
    </Button>
  )
}
