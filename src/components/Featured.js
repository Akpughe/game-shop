import React from 'react'
import PropTypes from 'prop-types';

const Featured=({featured, c, gameId})=>{
  return (
      <span>
          {featured ? (
            <a  onClick={()=>c(gameId)} className="ui right yellow corner label"><i className="star icon"></i></a>
          ):(
            <a  onClick={()=>c(gameId)} className="ui right corner label">
                <i className="empty star icon"></i>
            </a>

          )}
      </span>
  )
}

Featured.propTypes={
    featured: PropTypes.bool.isRequired,
    toggleFeatured:PropTypes.func.isRequired,
    gameId: PropTypes.number.isRequired
}
export default Featured;
