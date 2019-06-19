import React from 'react'
import PropTypes from 'prop-types';
import GameCard from './GameCard';
import Message from './Message'

const GamesList=({games, a})=> {
  return (
    <div className="ui four cards">
      {/* //map function to loop through games */}
      {
          games.length === 0 ? (
            <Message/>
          ):(
          games.map(game =><GameCard b={a} game={game} key={game._id} /> )
          )
        }
    </div>
  )
}

GamesList.propTypes={
    games: PropTypes.array.isRequired,
    a: PropTypes.func.isRequired,
}

GamesList.defaultProps={
    games:[]
}
export default GamesList;
