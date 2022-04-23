import React from "react";
import { useState } from "react";
import "./Title.css";
import { Link } from "react-router-dom";

function Title(obj_Title) {
    const { location } = obj_Title;
    const [numSeason, setNumSeason] = useState(0);

    let lenSeason = 1;
    let numEpisode = 0;

    const onClick = (e) => {
        setNumSeason(e.target.id - 1);
    };

    return (
        <div className="title_container">
            <img src={location.state.image} alt={location.state.title} title={location.state.title} />
            <p className="title_title">{location.state.title}</p>
            <p className="title_description">{location.state.description}</p>
            <div className="title_seasons"> Season
                <ul>
                    {location.state.episode.map (() => {    
                        return (<li key={lenSeason} id={lenSeason} onClick={(e) => {onClick(e)}}>{lenSeason++}</li>);
                    })}
                </ul>
            </div>
            <div className="title_episodes"> Episode
                <ul>
                    {location.state.episode[numSeason].map (() => {
                        return (<Link to={{
                            pathname: "/title/transcript",
                            state: {
                                url_head: location.state.url_head,
                                url_tail: location.state.episode[numSeason][numEpisode][1],
                                parsing: location.state.parsing
                            }
                        }}
                        key={numEpisode} ><li key={numEpisode} id={numEpisode}>{location.state.episode[numSeason][numEpisode++][0]}</li></Link>)
                    })}
                </ul>
            </div>
        </div>
    );
}

export default Title;