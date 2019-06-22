import React from 'react'
import PropTypes from 'prop-types'

function FormInlineMessage({content, type}) {
  return (
    <span style={{
        color: type === "error" ? "red" : "green" 
    }}>
      {content }
    </span>
  )
}

FormInlineMessage.defaultProps = {
    content: ""
}
FormInlineMessage.defaultProps = {
    content: PropTypes.string,
    type: PropTypes.oneOf(['error', 'info']).isRequired
}

export default FormInlineMessage

