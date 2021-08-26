import React from 'react';
import { useEffect, useState } from 'react';
import Leagues from '../Leagues/Leagues';
import "./Home.css";

const Home = () => {
    const [leagues, setLeagues] = useState([]);

    useEffect(() => {
        fetch("https://www.thesportsdb.com/api/v1/json/1/search_all_leagues.php?c=Italy")
            .then(res => res.json())
            .then(data => setLeagues(data.countrys))
    }, [])
    return (
        <div>
            <h1 className="bigHeading">SPORTS MANIA</h1>

            <div className="leagueStyle">
                {
                    leagues.map(league => <Leagues league={league}></Leagues>)
                }
            </div>
        </div>
    );
};

export default Home;