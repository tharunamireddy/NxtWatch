import {AiOutlineClose} from 'react-icons/ai'
import {Component} from 'react'
import {IoSearch} from 'react-icons/io5'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import HomeVideos from '../HomeVideos'
import Navbar from '../Navbar'
import FailureView from '../FailureView'
import ToogleContent from '../../context/ToogleContent'
import './index.css'
import {
  HomeContainer,
  BannerContainer,
  BannerCloseContainer,
  BannerImage,
  BannerCloseButton,
  BannerText,
  BannerButton,
  Content,
  MainContainer,
  SearchDiv,
  Input,
  LoaderContainer,
} from './styledComponents'
import Header from '../Header'

const BannerBg =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Home extends Component {
  state = {
    bannerShow: true,
    apiStatus: apiStatusConstants.initial,
    homePageVideos: [],
    searchInput: '',
  }

  componentDidMount() {
    this.videoRendering()
  }

  videoRendering = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const token = Cookies.get('jwt_token')
    const {searchInput} = this.state
    const url = `https://apis.ccbp.in/videos/all?search=${searchInput}`
    const options = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
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
        apiStatus: apiStatusConstants.success,
        homePageVideos: updatedData,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  onChangeInput = event => {
    this.setState({searchInput: event.target.value})
  }

  key = event => {
    if (event.code === 'Enter') {
      this.videoRendering()
    }
  }

  getSearchResults = () => {
    this.videoRendering()
  }

  onCloseBanner = () => {
    this.setState({bannerShow: false})
  }

  onRetryResults = () => {
    this.setState({searchInput: ''}, this.videoRendering)
  }

  renderLoadingView = () => (
    <LoaderContainer className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </LoaderContainer>
  )

  renderVideosView = () => {
    const {homePageVideos} = this.state
    return (
      <HomeVideos
        homeVideos={homePageVideos}
        onRetryResults={this.onRetryResults}
      />
    )
  }

  renderFailureView = () => <FailureView onRetry={this.onRetryResults} />

  renderAll = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderVideosView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    const {bannerShow, searchInput} = this.state
    return (
      <ToogleContent.Consumer>
        {value => {
          const {darkTheme} = value
          const isDark = darkTheme === true ? `dark` : `light`
          return (
            <HomeContainer data-testid="home" darkTheme={darkTheme}>
              <Header />
              <Content darkTheme={darkTheme}>
                <Navbar />
                <MainContainer>
                  {bannerShow && (
                    <BannerContainer data-testid="banner">
                      <BannerCloseContainer>
                        <BannerImage src={BannerBg} alt="nxt watch logo" />
                        <BannerCloseButton
                          data-testid="close"
                          onClick={this.onCloseBanner}
                        >
                          <AiOutlineClose size={25} />
                        </BannerCloseButton>
                      </BannerCloseContainer>
                      <BannerText>
                        Buy Nxt Watch Premium prepaid plans with <br /> UPI
                      </BannerText>
                      <BannerButton type="button">GET IT NOW</BannerButton>
                    </BannerContainer>
                  )}
                  <SearchDiv darkTheme={darkTheme}>
                    <Input
                      onChange={this.onChangeInput}
                      placeholder="Search"
                      type="search"
                      darkTheme={darkTheme}
                      value={searchInput}
                      onKeyDown={this.key}
                    />
                    <button
                      type="button"
                      className={`search button ${isDark}`}
                      aria-label="button"
                      data-testid="searchButton"
                      onClick={this.getSearchResults}
                    >
                      <IoSearch />
                    </button>
                  </SearchDiv>
                  {this.renderAll()}
                </MainContainer>
              </Content>
            </HomeContainer>
          )
        }}
      </ToogleContent.Consumer>
    )
  }
}

export default Home
