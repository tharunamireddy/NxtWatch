import Header from '../Header'
import Navbar from '../Navbar'

import {
  HomeContainer,
  Content,
  MainContainer,
  NotFoundVideosView,
  NotFoundVideosImage,
  NotFoundVideosHeading,
  NotFoundVideosText,
} from './styledComponents'

import ToggleContext from '../../context/ToogleContent'

const lightNotFound =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
const darkNotFound =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'

const NotFound = () => (
  <ToggleContext.Consumer>
    {value => {
      const {darkTheme} = value
      const notFoundImage = darkTheme ? darkNotFound : lightNotFound
      return (
        <>
          <HomeContainer data-testid="Trending" darkTheme={darkTheme}>
            <Header />
            <Content darkTheme={darkTheme}>
              <Navbar />
              <MainContainer>
                <NotFoundVideosView>
                  <NotFoundVideosImage src={notFoundImage} alt="not found" />
                  <NotFoundVideosHeading headingcolor={`${darkTheme}`}>
                    Page Not Found
                  </NotFoundVideosHeading>
                  <NotFoundVideosText textcolor={`${darkTheme}`}>
                    We are sorry, the page you requested could not be found.
                  </NotFoundVideosText>
                </NotFoundVideosView>
              </MainContainer>
            </Content>
          </HomeContainer>
        </>
      )
    }}
  </ToggleContext.Consumer>
)
export default NotFound
