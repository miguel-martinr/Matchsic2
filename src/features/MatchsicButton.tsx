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
  // if(props.className){
  //   const {className} = props;
  //   return (
  //     <button {...props} style={style} className={className}>
  //       {text}
  //     </button>
  //   )
  // }
  
  return (
    <button {...props} style={style}>
      {text}
    </button>
  )
}
