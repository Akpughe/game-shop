import React from 'react'
import PropTypes from 'prop-types'

function Message(props) {
  return (
    <div className="ui icon message">
        <i className="icon info"></i>
        <div className="content">
            <div className="header">There are no games in the store!</div>
                <p>You should add some don't you think</p>
        </div>
    </div>
  )
}

Message.propTypes = {

}

export default Message

