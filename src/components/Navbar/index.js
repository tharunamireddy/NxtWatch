import {Link} from 'react-router-dom'
import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {CgPlayListAdd} from 'react-icons/cg'

import {
  NavContainerDesktop,
  Ul,
  Li,
  MobileNavButton,
  ContactsContainer,
  ContactsUs,
  ContactIcons,
  ContactImage,
  ContactDescription,
  A,
} from './styledComponents'

import ToogleContent from '../../context/ToogleContent'

const Navbar = () => (
  <ToogleContent.Consumer>
    {value => {
      const {darkTheme, activeTab, changeTab} = value

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
      const linkcolor = darkTheme === true ? `white` : `blue`

      return (
        <>
          <NavContainerDesktop darkTheme={darkTheme}>
            <Ul>
              <Link
                to="/"
                onClick={clickedHome}
                value="Home"
                className={`${linkcolor} Link`}
              >
                <Li activeTab={activeTab === 'Home'} darkTheme={darkTheme}>
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
                <Li activeTab={activeTab === 'Trending'} darkTheme={darkTheme}>
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
                <Li activeTab={activeTab === 'Gaming'} darkTheme={darkTheme}>
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
            <ContactsContainer navcolor={`${darkTheme}`}>
              <ContactsUs>Contact Us</ContactsUs>
              <ContactIcons>
                <A href="http://www.facebook.com" target="_blank">
                  <ContactImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                    alt="facebook logo"
                  />
                </A>
                <A href="https://www.twitter.com" target="_blank">
                  <ContactImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                    alt="twitter logo"
                  />
                </A>
                <A
                  href="https://www.linkedin.com/in/tharun-amireddy/"
                  target="_blank"
                >
                  <ContactImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                    alt="linked in logo"
                  />
                </A>
                <ContactDescription>
                  Enjoy! Now to see your channels and recommendations!
                </ContactDescription>
              </ContactIcons>
            </ContactsContainer>
          </NavContainerDesktop>
        </>
      )
    }}
  </ToogleContent.Consumer>
)

export default Navbar
