import React from 'react';
import PropTypes from 'prop-types';
import Featured from './Featured';
import Description from './Description';

// import GamesList from './GamesList';

export default function GameCard({
  game,
  b,
  desc1,
  descToggle,
  showDesc,
  fdesc,
  editGame,
}) {
  return (
    <div className="ui card">
      <div className="image">
        <span className="ui green ribbon label">
          £{game.price}
          {game.price < 30 && '!'}
        </span>
        <Featured featured={game.featured} gameId={game._id} c={b} />
        <img src={game.thumbnail} alt="Game Cover" />
      </div>
      <div className="content">
        <a className="header">{game.name}</a>
        <div className="meta">
          <i className="icon users" />
          {game.players}&nbsp;
          <i className="icon wait" />
          {game.duration}
          <Description
            desc={desc1}
            fdesc={fdesc}
            showDesc={showDesc}
            descToggle={descToggle}
          />
        </div>
      </div>
      <div className="extra content">
        <div className="ui two buttons">
          <a className="ui basic green button" onClick={() => editGame(game)}>
            <i className="ui icon edit" />
          </a>
          <a className="ui red basic button">
            <i className="ui icon trash" />
          </a>
        </div>
      </div>
    </div>
  );
}

GameCard.propTypes = {
  game: PropTypes.shape({
    name: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    players: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    duration: PropTypes.number.isRequired,
    featured: PropTypes.bool.isRequired,
    editGame: PropTypes.func.isRequired,
  }), 
};
