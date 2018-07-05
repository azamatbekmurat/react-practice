import React from 'react'
import PropTypes from 'prop-types'

function Ticket(props){
  return (
    <div>
      <style jsx global>{`
        .color-toggle {
          background-color: green;
        }
        .color-toggle:hover {
          background-color: pink;
        }
      `}</style>
      <div className="color-toggle">
        <h3>{props.location} - {props.names}</h3>
        <h4>{props.formattedWaitTime}</h4>
        <p><em>{props.issue}</em></p>
        <hr/>
      </div>

    </div>
  )
}


Ticket.propTypes = {
  names: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  issue: PropTypes.string,
  formattedWaitTime: PropTypes.string.isRequired
}
export default Ticket
