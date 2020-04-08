import React from 'react'
import PropTypes from 'prop-types'
import Hello from './Hello'

const Goodbye = props => (
  <div>
    <Hello name="Jason" />
    <div>Goodbye {props.name}!</div>
  </div>
)

Goodbye.defaultProps = {
  name: 'David'
}

Goodbye.propTypes = {
  name: PropTypes.string
}

export default Goodbye
