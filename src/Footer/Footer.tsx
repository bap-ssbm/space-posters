import { FC } from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
interface FooterProps {

}

const Footer: FC<FooterProps> = ({ }) => {
    return (
        <footer>
            <div className='footer-left-wrapper'>
                <h1 className='footer-logo'>
                    SPACE POSTERS
                </h1>
                <p className='copyright'>
                    © Space Posters, {new Date().getFullYear() }
                </p>
                <div className='footer-link'>
                    <Link to='/'>
                        HOME
                    </Link>
                    <Link to='/contact'>
                        CONTACT
                    </Link>
                </div>


            </div>
            <div className='footer-right'>
                <p className='sign-up-desc'>
                Sign up for announcements, sales, and new product updates.
                </p>
                <div className='signup-form'>
                    <input placeholder='Enter email here' type='text'/>
                    <button>
                         Submit
                    </button>
                </div>
                <a className='instagram' href="https://www.instagram.com/spaceposters.co/">
                    <img  src='/Images/instagram.svg'/> <span>Instagram</span>
                </a>
            </div>

        </footer>
    )
}

export default Footer