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


interface MatchsicButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string,
}




export const MatchsicButton = (props: MatchsicButtonProps) => {
  
  const {text} = props;
  
  return (
    <button {...props} style={style}>
      {text}
    </button>
  )
}
