import {Component} from 'react'
import {CgPlayListAdd} from 'react-icons/cg'

import Navbar from '../Navbar'
import SavedVideoCard from '../SavedVideoCard'
import ToogleContent from '../../context/ToogleContent'
import Header from '../Header'
import {
  HomeContainer,
  Content,
  MainContainer,
  SavedVideosItems,
  NoSavedVideosContainer,
  NoSavedVideosImage,
  NoSavedVideosHeading,
  NoSavedVideosText,
  SaveVideosHeadingContainer,
  TitleIconContainer,
  SavedHeading,
} from './styledComponents'

const noSavedVideosImage =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png'

class SavedVideos extends Component {
  render() {
    return (
      <ToogleContent.Consumer>
        {value => {
          const {darkTheme, savedVideos} = value
          const textColor = darkTheme ? '#f9f9f9' : '#231f20'
          const status = savedVideos.length
          return (
            <HomeContainer data-testid="savedVideos" darkTheme={darkTheme}>
              <Header />
              <Content darkTheme={darkTheme}>
                <Navbar />
                <MainContainer>
                  <SaveVideosHeadingContainer trendbg={`${darkTheme}`}>
                    <TitleIconContainer iconcolor={`${darkTheme}`}>
                      <CgPlayListAdd size={35} color="#ff0000" />
                    </TitleIconContainer>
                    <SavedHeading color={textColor}>Saved Videos</SavedHeading>
                  </SaveVideosHeadingContainer>
                  <SavedVideosItems>
                    {status > 0 ? (
                      <>
                        {savedVideos.map(eachItem => (
                          <SavedVideoCard
                            eachVideo={eachItem}
                            key={eachItem.id}
                          />
                        ))}
                      </>
                    ) : (
                      <NoSavedVideosContainer>
                        <NoSavedVideosImage
                          src={noSavedVideosImage}
                          alt="no saved videos"
                        />
                        <NoSavedVideosHeading headingColor={`${darkTheme}`}>
                          No saved videos found
                        </NoSavedVideosHeading>
                        <NoSavedVideosText TextColor={`${darkTheme}`}>
                          You can save your videos while watching them
                        </NoSavedVideosText>
                      </NoSavedVideosContainer>
                    )}
                  </SavedVideosItems>
                </MainContainer>
              </Content>
            </HomeContainer>
          )
        }}
      </ToogleContent.Consumer>
    )
  }
}

export default SavedVideos
