import React from 'react';
import PropTypes from 'prop-types';
import GameCard from './GameCard';
import Message from './Message';

const GamesList = ({
  games,
  a,
  desc,
  showDesc,
  descToggle,
  descs,
  editGame,
}) => {
  return (
    <div className="ui four cards">
      {/* //map function to loop through games */}
      {games.length === 0 ? (
        <Message />
      ) : (
        games.map(game => (
          <GameCard
            b={a}
            game={game}
            key={game._id}
            desc1={desc}
            fdesc={descs}
            showDesc={showDesc}
            descToggle={descToggle}
            editGame={editGame}
          />
        ))
      )}
    </div>
  );
};

GamesList.propTypes = {
  games: PropTypes.array.isRequired,
  a: PropTypes.func.isRequired,
  editGame: PropTypes.func.isRequired,
};

GamesList.defaultProps = {
  games: [],
};
export default GamesList;
