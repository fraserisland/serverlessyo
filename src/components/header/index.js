import React from 'react'
import PropTypes from 'prop-types'
import './styles.scss'

const Header = (props) => (
  <div>
      <h1>{props.title}</h1>
  </div>
)

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Header
