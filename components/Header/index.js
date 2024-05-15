// Write your code here
import {Popup} from 'reactjs-popup'
import {Link} from 'react-router-dom'

import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'

import './index.css'

const Header = () => (
  <div className="header-container">
    <Link to="/" className="website-logo-link">
      <img
        src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
        alt="website logo"
        className="website-logo"
      />
    </Link>
    <div className="pop-up-container">
      <Popup
        modal
        trigger={
          /* eslint-disable-next-line */
          <button
            type="button"
            className="pop-up-btn"
            data-testid="hamburgerIconButton"
          >
            <GiHamburgerMenu className="hamburger" />
          </button>
        }
      >
        {close => (
          <>
            <div className="pop-up-view">
              <button
                type="button"
                className="close-btn"
                onClick={() => close()}
                data-testid="closeButton"
              >
                {/* eslint-disable-next-line */}
                <IoMdClose className="close-icon" />
              </button>
              <ul className="link-items">
                <li>
                  <Link to="/" className="link-item">
                    <div className="link-container">
                      <AiFillHome className="link-symbols" />
                      <p className="link-heading">Home</p>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="link-item">
                    <div className="link-container">
                      <BsInfoCircleFill className="link-symbols" />
                      <p className="link-heading">About</p>
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
          </>
        )}
      </Popup>
    </div>
  </div>
)
export default Header
