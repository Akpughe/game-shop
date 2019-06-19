import React from 'react'
import GameCard from './GameCard';

const GamesList=({games})=> {
  return (
    <div className="ui four cards">
      {/* //map function to loop through games */}
      {games.map(game =><GameCard game={game} key={game._id}/> )}
    </div>
  )
}

export default GamesList;
