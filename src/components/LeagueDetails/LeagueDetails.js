import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './LeagueDetails.css';
import { Container, Row, Col } from 'react-bootstrap';
import maleLogo from '../../../src/images/male.png';
import femaleLogo from '../../../src/images/female.png';
import facebook from '../../../src/images/Facebook.png';
import twitter from '../../../src/images/Twitter.png';
import youtube from '../../../src/images/YouTube.png';
import football from '../../../src/Icon/football (1) 1.png';
import found from '../../../src/Icon/found 1.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMars, faFlag } from '@fortawesome/free-solid-svg-icons';

const LeagueDetails = () => {
    const [singleLeague, setSingleLeague] = useState({});
    const { id } = useParams();
    console.log(id);

    useEffect(() => {
        fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${id}`)
            .then(res => res.json())
            .then(data => setSingleLeague(data.leagues[0]));

    }, [id])
    return (
        <div>
            <img style={{ width: '400px' }} src={singleLeague.strBadge} alt="" />

            <div style={{ backgroundColor: "#191970", color: "#fff", textAlign: "left", margin: "10px", padding: "50px" }}>
                <Container style={{ backgroundColor: "blue", textAlign: "left", borderRadius: "10px", padding: "20px" }}>
                    <Row>
                        <Col><h2>{singleLeague.strLeague}</h2>
                            <img className="iconImg" src={found} alt="" /> Founded : {singleLeague.intFormedYear}
                            <p><FontAwesomeIcon icon={faFlag} /> Country : {singleLeague.strCountry}</p>
                            <img className="iconImg" src={football} alt="" /> Sports Type : {singleLeague.strSport}
                            <p><FontAwesomeIcon icon={faMars} /> Gender : {singleLeague.strGender}</p></Col>
                        <Col>
                            {singleLeague.strGender === "Male" ? <img style={{ width: '400px' }} src={maleLogo} alt="" /> : <img style={{ width: '400px' }} src={femaleLogo} alt="" />}
                        </Col>
                    </Row>
                </Container>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam iure culpa harum maxime quas mollitia eligendi laborum inventore expedita quisquam aliquam, tempora reiciendis nemo corporis sed ad, vitae ex provident.
                    Veritatis nobis itaque sapiente quia. Quaerat quas consequuntur error, culpa alias aperiam eligendi officiis dolor ea praesentium. In ipsum, impedit rem itaque assumenda corrupti dolorum, debitis, sint repellat sunt obcaecati.
                    Illum odit aspernatur consectetur laborum dolore commodi omnis iusto eum animi cumque fugit iste dolorum nulla aperiam unde hic deserunt dicta, consequatur voluptates numquam non? Veniam fuga eaque sint esse!</p>
                <br />
                <br />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam iure culpa harum maxime quas mollitia eligendi laborum inventore expedita quisquam aliquam, tempora reiciendis nemo corporis sed ad, vitae ex provident.
                    Veritatis nobis itaque sapiente quia. Quaerat quas consequuntur error, culpa alias aperiam eligendi officiis dolor ea praesentium. In ipsum, impedit rem itaque assumenda corrupti dolorum, debitis, sint repellat sunt obcaecati.
                    Illum odit aspernatur consectetur laborum dolore commodi omnis iusto eum animi cumque fugit iste dolorum nulla aperiam unde hic deserunt dicta, consequatur voluptates numquam non? Veniam fuga eaque sint esse!</p>

                <div className="footerImg">
                    <img src={facebook} alt="" />
                    <img src={twitter} alt="" />
                    <img src={youtube} alt="" />
                </div>


            </div>
        </div>
    );
};

export default LeagueDetails;