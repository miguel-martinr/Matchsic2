import React from 'react';


interface LoginPageProps {
  setUserToken: (token: string) => void,
}

const containerStyle: React.CSSProperties = {
  background: "#0BA55D",
}

const titleStyle: React.CSSProperties = {
  fontSize: "3em",
  fontWeight: "bold",
  color: "white",
}


export const LoginPage = (props: LoginPageProps) => {
  return (
    <div className="container-fluid vh-100" style={containerStyle}>
      <div className="row pt-5"></div> { /*Offset*/}

      <div className="row">
        <div className="col text-center">
          <h1 style={titleStyle}>Matchsic</h1>
        </div>
      </div>
    </div>
  )
}
