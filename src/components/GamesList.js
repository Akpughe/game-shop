import React from 'react'
import PropTypes from 'prop-types';
import GameCard from './GameCard';
import Message from './Message'

const GamesList=({games})=> {
  return (
    <div className="ui four cards">
      {/* //map function to loop through games */}
      {
          games.length === 0 ? (
            <Message/>
          ):(
          games.map(game =><GameCard game={game} key={game._id}/> )
          )
        }
    </div>
  )
}

GamesList.propTypes={
    games: PropTypes.array.isRequired
}

GamesList.defaultProps={
    games:[]
}
export default GamesList;
