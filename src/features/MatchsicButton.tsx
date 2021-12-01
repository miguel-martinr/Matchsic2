import React from 'react'

const style = {
  backgroundColor: '#fff',
  color: '#0BA55D',
  borderRadius: '100px',
  border: 'none',
  width: '8em',
  height: '3em',
  fontWeight: 'bold',
}


interface MatchsicButtonProps {
  text: string,
}




export const MatchsicButton = (props: MatchsicButtonProps) => {
  return (
    <button style={style}>
      {props.text}
    </button>
  )
}
