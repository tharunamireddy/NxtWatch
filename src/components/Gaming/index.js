import {Component} from 'react'
import Cookies from 'js-cookie'
import {SiYoutubegaming} from 'react-icons/si'

import Loader from 'react-loader-spinner'
import Navbar from '../Navbar'
import GamingVideoCard from '../GamingVideoCard'
import FailureView from '../FailureView'
import ToogleContent from '../../context/ToogleContent'
import Header from '../Header'
import {
  HomeContainer,
  Content,
  MainContainer,
  GamingVideosContainer,
  GamingVideosContent,
  GamingHeadingContainer,
  GamingTitleIconContainer,
  GamingHeading,
  LoaderContainer,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Gaming extends Component {
  state = {
    gamingVideos: [],
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getGamingVideos()
  }

  getGamingVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/gaming`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    if (response.ok) {
      const data = await response.json()
      const updatedData = data.videos.map(eachVideo => ({
        id: eachVideo.id,
        title: eachVideo.title,
        thumbnailUrl: eachVideo.thumbnail_url,
        viewCount: eachVideo.view_count,
      }))
      this.setState({
        gamingVideos: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderGamingVideosView = () => {
    const {gamingVideos} = this.state
    return (
      <GamingVideosContent>
        {gamingVideos.map(eachItem => (
          <GamingVideoCard eachVideo={eachItem} key={eachItem.id} />
        ))}
      </GamingVideosContent>
    )
  }

  renderLoadingView = () => (
    <LoaderContainer className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </LoaderContainer>
  )

  onRetry = () => {
    this.getGamingVideos()
  }

  renderFailureView = () => <FailureView onRetry={this.onRetry} />

  renderGamingVideos = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderGamingVideosView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    return (
      <ToogleContent.Consumer>
        {value => {
          const {darkTheme} = value
          const bgColor = darkTheme ? '#0f0f0f' : '#f9f9f9'
          const textColor = darkTheme ? '#f9f9f9' : '#231f20'
          return (
            <HomeContainer data-testid="gaming" darkTheme={darkTheme}>
              <Header />
              <Content darkTheme={darkTheme}>
                <Navbar />
                <MainContainer data-testid="Gaming">
                  <GamingVideosContainer data-testid="gaming" bgColor={bgColor}>
                    <GamingHeadingContainer trendbg={`${darkTheme}`}>
                      <GamingTitleIconContainer iconcolor={`${darkTheme}`}>
                        <SiYoutubegaming size={25} color="#ff0000" />
                      </GamingTitleIconContainer>
                      <GamingHeading color={textColor}>Gaming</GamingHeading>
                    </GamingHeadingContainer>
                    {this.renderGamingVideos()}
                  </GamingVideosContainer>
                </MainContainer>
              </Content>
            </HomeContainer>
          )
        }}
      </ToogleContent.Consumer>
    )
  }
}

export default Gaming
