import React from 'react'


const style = {
  width: '7rem',
  height: '7rem',
  border: '3px white solid',
  borderRadius: '60px',
  boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
}


interface MatchsicProfileImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  
}




export const MatchsicProfileImage= (props: MatchsicProfileImageProps) => {
  
  
  return (
    <img {...props} style={style}/>
  )
}