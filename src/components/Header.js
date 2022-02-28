import PropTypes from 'prop-types'

// can pass 'props' into function
const Header = ({ title }) => {
  return (
    <header>
        <h1>{title}</h1>
    </header>
  )
}

// default prop if none are provided
Header.defaultProps = {
    title: 'Task Tracker'
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}

export default Header