import { useLocation } from 'react-router-dom'

import PropTypes from 'prop-types'
import Button from './Button'

// can pass 'props' into function
const Header = ({ title, onAdd, showAdd }) => {

  const location = useLocation()

  return (
    <header className='header'>
        <h1>{title}</h1>
        {location.pathname === '/' && <Button 
          color={showAdd ? 'red' : 'green'} 
          text={showAdd ? 'Close' : 'Add'} 
          onClick={onAdd}/>}
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

// can use variables with styles and pass to elements
// const headingStyle = {color: 'red', backgroundColor: 'black'}

export default Header