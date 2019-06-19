import React from 'react';
import PropTypes from 'prop-types';

const Description = ({ descs, desc, gameId, descToggle, showDesc, fdesc }) => {
  return (
    <span>
      <a onClick={() => desc(gameId)} className="ui right black bottom label">
        <i onClick={() => descToggle()} className="eye icon" />
      </a>
      {showDesc && <p>{`${fdesc} test test`}</p>}
    </span>
  );
};
Description.propTypes = {
  descs: PropTypes.string.isRequired,
  desc: PropTypes.func.isRequired,
  gameId: PropTypes.number.isRequired,
};
export default Description;
