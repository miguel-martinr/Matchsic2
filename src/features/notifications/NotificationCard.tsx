import React, { Fragment } from 'react'
import { Col, Row } from 'react-bootstrap';
import classes from './NotificationCard.module.css';

interface NotificationCardProps extends React.HTMLAttributes<HTMLDivElement> {
  onGoToMap: React.MouseEventHandler<HTMLButtonElement>
}



export const NotificationCard = (props: NotificationCardProps) => {
  return (
    <div {...props}> 
      <Row>
        <Col>
          <img
            className={[classes.senderProfilePicture].join(" ")}
            src="https://i.pinimg.com/originals/ae/ec/c2/aeecc22a67dac7987a80ac0724658493.jpg"
            alt="Sender profile picture"
          />
        </Col>
      </Row>
    </div>
  );
}
