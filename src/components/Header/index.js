import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import {BsBrightnessHigh} from 'react-icons/bs'
import {FiLogOut} from 'react-icons/fi'
import {AiOutlineClose, AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {CgPlayListAdd} from 'react-icons/cg'

import {GiHamburgerMenu} from 'react-icons/gi'
import {FaMoon} from 'react-icons/fa'
import Popup from 'reactjs-popup'

import {
  HeaderContainerDesktop,
  HeaderContainerMobile,
  Img,
  Button,
  ChangeBtn,
  CloseBtn,
  LogoutBtn,
  Para,
  Logout,
  MobileButton,
  Hamburger,
  Ul,
  Li,
  MobileNavButton,
} from './styledComponents'
import './index.css'

import ToogleContent from '../../context/ToogleContent'

const Header = props => {
  const logout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }
  return (
    <ToogleContent.Consumer>
      {value => {
        const {darkTheme, toggleTheme, activeTab, changeTab} = value
        const change = () => {
          toggleTheme()
        }
        const clickedHome = () => {
          changeTab('Home')
        }
        const clickedTrending = () => {
          changeTab('Trending')
        }
        const clickedGaming = () => {
          changeTab('Gaming')
        }
        const clickedSaved = () => {
          changeTab('SavedVideos')
        }
        const themeBtn = darkTheme ? (
          <BsBrightnessHigh className="sun" />
        ) : (
          <FaMoon className="moon" />
        )
        const linkcolor = darkTheme === true ? `white` : `blue`
        const logoimg = darkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
        return (
          <>
            <HeaderContainerDesktop>
              <Link to="/" className="link">
                <Img src={logoimg} value="nxt watch logo" alt="website logo" />
              </Link>
              <div className="logout-div">
                <ChangeBtn data-testid="theme" onClick={change}>
                  {themeBtn}
                </ChangeBtn>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                  alt="profile"
                  className="profile"
                />
                <Popup
                  modal
                  trigger={<Button darkTheme={darkTheme}>Logout</Button>}
                >
                  {close => (
                    <>
                      <Logout darkTheme={darkTheme}>
                        <Para darkTheme={darkTheme}>
                          Are you sure you want to logout?
                        </Para>
                        <CloseBtn onClick={() => close()}>Cancel</CloseBtn>
                        <LogoutBtn onClick={logout}>Logout</LogoutBtn>
                      </Logout>
                    </>
                  )}
                </Popup>
              </div>
            </HeaderContainerDesktop>
            <HeaderContainerMobile>
              <Link to="/" className="link">
                <Img src={logoimg} value="nxt watch logo" alt="website logo" />
              </Link>
              <div className="logout-div">
                <ChangeBtn data-testid="theme" onClick={change}>
                  {themeBtn}
                </ChangeBtn>
                <Popup
                  modal
                  trigger={
                    <MobileButton darkTheme={darkTheme}>
                      <GiHamburgerMenu />
                    </MobileButton>
                  }
                >
                  {close => (
                    <>
                      <Hamburger darkTheme={darkTheme}>
                        <MobileButton
                          className="align-right"
                          darkTheme={darkTheme}
                          onClick={() => close()}
                        >
                          <AiOutlineClose />
                        </MobileButton>
                        <Ul>
                          <Link
                            to="/"
                            onClick={clickedHome}
                            value="Home"
                            className={`${linkcolor} Link`}
                          >
                            <Li
                              activeTab={activeTab === 'Home'}
                              darkTheme={darkTheme}
                            >
                              <MobileNavButton
                                darkTheme={darkTheme}
                                activeTab={activeTab === 'Home'}
                              >
                                <AiFillHome className="nav" />
                              </MobileNavButton>
                              Home
                            </Li>
                          </Link>
                          <Link
                            to="/trending"
                            onClick={clickedTrending}
                            value="Trending"
                            className={`${linkcolor} Link`}
                          >
                            <Li
                              activeTab={activeTab === 'Trending'}
                              darkTheme={darkTheme}
                            >
                              <MobileNavButton
                                activeTab={activeTab === 'Trending'}
                                darkTheme={darkTheme}
                              >
                                <HiFire className="nav" />
                              </MobileNavButton>
                              Trending
                            </Li>
                          </Link>
                          <Link
                            to="/gaming"
                            onClick={clickedGaming}
                            value="Gaming"
                            className={`${linkcolor} Link`}
                          >
                            <Li
                              activeTab={activeTab === 'Gaming'}
                              darkTheme={darkTheme}
                            >
                              <MobileNavButton
                                darkTheme={darkTheme}
                                activeTab={activeTab === 'Gaming'}
                              >
                                <SiYoutubegaming className="nav" />
                              </MobileNavButton>
                              Gaming
                            </Li>
                          </Link>
                          <Link
                            to="/saved-videos"
                            onClick={clickedSaved}
                            value="SavedVideos"
                            className={`${linkcolor} Link`}
                          >
                            <Li
                              activeTab={activeTab === 'SavedVideos'}
                              darkTheme={darkTheme}
                            >
                              <MobileNavButton
                                darkTheme={darkTheme}
                                activeTab={activeTab === 'SavedVideos'}
                              >
                                <CgPlayListAdd className="nav" />
                              </MobileNavButton>
                              Saved videos
                            </Li>
                          </Link>
                        </Ul>
                      </Hamburger>
                    </>
                  )}
                </Popup>
                <Popup
                  modal
                  trigger={
                    <MobileButton darkTheme={darkTheme}>
                      <FiLogOut />
                    </MobileButton>
                  }
                >
                  {close => (
                    <>
                      <Logout darkTheme={darkTheme}>
                        <Para darkTheme={darkTheme}>
                          Are you sure you want to logout?
                        </Para>
                        <CloseBtn onClick={() => close()}>Cancel</CloseBtn>
                        <LogoutBtn onClick={logout}>Logout</LogoutBtn>
                      </Logout>
                    </>
                  )}
                </Popup>
              </div>
            </HeaderContainerMobile>
          </>
        )
      }}
    </ToogleContent.Consumer>
  )
}
export default withRouter(Header)
