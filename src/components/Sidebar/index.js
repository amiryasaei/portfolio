import { Link , NavLink } from 'react-router-dom'
import './index.scss'
import myLogo from '../../assets/images/React-icon.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHome, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
const Sidebar = () => (
    <div className='nav-bar'>
        <Link className="logo" to="/">
            <img src={myLogo} alt="Logo"/>
        </Link>
        <nav>
            <NavLink exact="true" activeclassname='active' to='/'>
                <FontAwesomeIcon icon={faHome} color='#4d4d4e' />
            </NavLink>

            <NavLink exact="true" activeclassname='active' className="about-link" to='/about'>
                <FontAwesomeIcon icon={faUser} color='#4d4d4e' />
            </NavLink>

            <NavLink exact="true" activeclassname='active' className="contact-link" to='/contact'>
                <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e' />
            </NavLink>
        </nav>
        <ul>
            <li>
                <a
                    target='_blank'
                    rel="noreferrer"
                    href="https://www.linkedin.com/in/amir-yasaei-76b5721a9/"

                >
                   <FontAwesomeIcon icon={faLinkedinIn} color='#4d4d4e' />
                </a>
            </li>

            <li>
                <a
                    target='_blank'
                    rel="noreferrer"
                    href="https://github.com/amriyasaei"

                >
                   <FontAwesomeIcon icon={faGithub} color='#4d4d4e' />
                </a>
            </li>

            <li>
                <a
                    target='_blank'
                    rel="noreferrer"
                    href="https://www.instagram.com/amir.yasaei/"

                >
                   <FontAwesomeIcon icon={faInstagram} color='#4d4d4e' />
                </a>
            </li>
        </ul>
    </div>
)

export default Sidebar