import React from 'react'
import PropTypes from 'prop-types';
import GameCard from './GameCard';

const GamesList=({games})=> {
  return (
    <div className="ui four cards">
      {/* //map function to loop through games */}
      {
          games.length === 0 ? (
             <div className="ui icon message">
                 <i className="icon info"></i>
                     <div className="content">
                         <div className="header">There are no games in the store!</div>
                             <p>You should add some don't ypu think</p>
                     </div>
             </div>
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
