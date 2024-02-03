import './Header.styles.scss'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav>
      <div className='header'>

      <span className='header__link'><Link to='/'>Home</Link></span>
      <span className='header__link'><Link to='/reserve'>Reservas</Link></span>
      <span className='header__link'><Link to='/acknowledgement'>Agradecimientos</Link></span>
      </div>
    </nav>
  )
}

export default Header