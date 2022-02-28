import PropTypes from 'prop-types'
import Button from './Button'

// can pass 'props' into function
const Header = ({ title }) => {

    const onClick = (event) => {
        console.log('click')
        console.log(event)
    }

  return (
    <header className='header'>
        <h1>{title}</h1>
        <Button color='green' text='Add' onClick={onClick}/>
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