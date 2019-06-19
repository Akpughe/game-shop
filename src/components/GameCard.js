import React from 'react'
import PropTypes from 'prop-types';
import Featured from './Featured'
import GamesList from './GamesList';

export default function GameCard({game}) {
    return (
        <div className="ui card">
            <div className="image">
                <span className="ui green ribbon label">
                £{game.price} 
                {game.price < 30 && "!"}
                </span>
                <Featured featured={game.featured}/>
                <img 
                src={game.thumbnail} 
                alt="Game Cover"/>
            </div>
            <div className="content">
                <a className="header">{game.name}</a>
                <div className="meta">
                    <i className="icon users"/>{game.players}&nbsp;
                    <i className="icon wait"/>{game.duration}
                </div>
            </div>
        </div>
    )

} 

GameCard.propTypes={
        game: PropTypes.shape({
        name: PropTypes.string.isRequired,
        thumbnail: PropTypes.string.isRequired,
        players: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        duration: PropTypes.number.isRequired,
        featured: PropTypes.bool.isRequired
    })
}
 