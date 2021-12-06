import React, { Fragment } from 'react'
import { Col, Row } from 'react-bootstrap';
import { MatchsicButton } from '../MatchsicButton';
import classes from './Notifications.module.css';

interface NotificationCardProps extends React.HTMLAttributes<HTMLDivElement> {
  handleGoToMap: React.MouseEventHandler<HTMLButtonElement>
  sender: {
    username: string,
    profileLink: string,
  },
  payload: string, // Short message
}




export const NotificationCard = (props: NotificationCardProps) => {

  const {handleGoToMap, ...divProps} = props;
  const { sender } = props;
  const getHeader = () => {
    return (
      <span><strong><a href={sender.profileLink}>{sender.username}</a></strong> te ha dado un toque</span>
    );
  };

  return (
    <div {...divProps}>
      <Row>
        <Col className="col-2"> {/*Image column*/}
          <img
            className={[classes.senderProfilePicture].join(" ")}
            src="https://i.pinimg.com/originals/ae/ec/c2/aeecc22a67dac7987a80ac0724658493.jpg"
            alt="Sender profile picture"
          />
        </Col>
        <Col className="ms-3 me-3">
          <Row className="mb-2"> {/*Header row */}
            <Col>
              {getHeader()}
            </Col>
          </Row>
          <Row>
            <span className={classes.notificationPayloadText}>{props.payload}</span>
          </Row>
        </Col>
      </Row>
      <Row className="mt-2">
        <Col className="offset-2">
          <MatchsicButton
            className={`${classes.button} border-0`}
            text="Ir al mapa"
            onClick={handleGoToMap}
          />
        </Col>
        <Col>
          <MatchsicButton
            className={`${classes.button} border-0`}
            text="Devolver"
          />
        </Col>
      </Row>
    </div>
  );
}
