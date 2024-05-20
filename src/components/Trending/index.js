import {Component} from 'react'
import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {HiFire} from 'react-icons/hi'

import TrendingVideoCard from '../TrendingVideoCard'
import FailureView from '../FailureView'
import Navbar from '../Navbar'
import ToogleContent from '../../context/ToogleContent'

import {
  HomeContainer,
  Content,
  MainContainer,
  TrendingVideosContent,
  TrendingHeadingContainer,
  TitleIconContainer,
  TrendingHeading,
  LoaderContainer,
} from './styledComponents'

import Header from '../Header'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Trending extends Component {
  state = {
    trendingVideos: [],
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getTrendVideos()
  }

  getTrendVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/trending`
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
        publishedAt: eachVideo.published_at,
        name: eachVideo.channel.name,
        profileImageUrl: eachVideo.channel.profile_image_url,
      }))
      this.setState({
        trendingVideos: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderTrendingVideosView = () => {
    const {trendingVideos} = this.state
    return (
      <TrendingVideosContent>
        {trendingVideos.map(eachItem => (
          <TrendingVideoCard eachVideo={eachItem} key={eachItem.id} />
        ))}
      </TrendingVideosContent>
    )
  }

  renderLoadingView = () => (
    <LoaderContainer className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </LoaderContainer>
  )

  onRetry = () => {
    this.getTrendVideos()
  }

  renderFailureView = () => <FailureView onRetry={this.onRetry} />

  renderTrendingVideos = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderTrendingVideosView()
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
          const textColor = darkTheme ? '#f9f9f9' : '#231f20'
          return (
            <HomeContainer data-testid="trending" darkTheme={darkTheme}>
              <Header />
              <Content darkTheme={darkTheme}>
                <Navbar />
                <MainContainer data-testid="Trending">
                  <TrendingHeadingContainer trendbg={`${darkTheme}`}>
                    <TitleIconContainer iconcolor={`${darkTheme}`}>
                      <HiFire size={25} color="#ff0000" />
                    </TitleIconContainer>
                    <TrendingHeading color={textColor}>
                      Trending
                    </TrendingHeading>
                  </TrendingHeadingContainer>
                  {this.renderTrendingVideos()}
                </MainContainer>
              </Content>
            </HomeContainer>
          )
        }}
      </ToogleContent.Consumer>
    )
  }
}

export default withRouter(Trending)
