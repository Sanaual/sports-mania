import React from 'react';
import "./Leagues.css";
import { Link } from 'react-router-dom';
import { Button, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Leagues = (props) => {
  const { strLogo, strLeague, strSport, idLeague } = props.league;
  return (
    <div>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={strLogo} />
        <Card.Body>
          <Card.Title>{strLeague}</Card.Title>
          <Card.Text>
            Sports Type:{strSport}
          </Card.Text>
          <Link to={'/id/' + idLeague}><Button>Explore <FontAwesomeIcon icon={faArrowRight} /></Button></Link>
        </Card.Body>
      </Card>

    </div>
  );
};

export default Leagues;