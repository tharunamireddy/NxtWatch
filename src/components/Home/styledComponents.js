import styled from 'styled-components'

export const HomeContainer = styled.div`
  min-height: 100vh;
  background-color: ${props =>
    props.darkTheme === true ? `#212121` : `#ffffff`};
`
export const BannerContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  height: 200px;
  background-size: cover;
  padding: 20px;
  @media screen and (max-width: 567px) {
    padding: 10px;
    width: 100vw;
  }
`
export const BannerCloseContainer = styled.div`
  display: flex;
`
export const BannerImage = styled.img`
  width: 130px;
  height: 35px;
`
export const BannerCloseButton = styled.button`
  display: flex;
  align-items: center;
  border: none;
  outline: none;
  cursor: pointer;
  background-color: transparent;
  margin-left: auto;
`
export const BannerText = styled.p`
  font-family: 'Roboto';
  font-size: 20px;
  @media screen and (max-width: 567px) {
    font-size: 15px;
  }
`
export const BannerButton = styled.button`
  border: 2px solid #000000;
  color: #000000;
  outline: none;
  background-color: transparent;
  padding: 8px 18px;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: bold;
  align-self: flex-start;
  @media screen and (max-width: 567px) {
    padding: 5px 15px;
    font-size: 12px;
  }
`
export const Content = styled.div`
  display: flex;
  background-color: ${props =>
    props.darkTheme === true ? `#181818` : `#f9f9f9`};
  height: 92vh;
  overflow-y: auto;
  @media screen and (max-width: 768px) {
    display: block;
  }
`

export const MainContainer = styled.div`
  display: block;
  width: 82vw;
  height: 92vh;
  margin-left: 18vw;
  @media screen and (max-width: 768px) {
    width: 100vw;
    margin-left: 0;
  }
`
export const SearchDiv = styled.div`
  margin: 30px;
  display: flex;
  border: 1.5px solid
    ${props => (props.darkTheme === true ? `#2e2e2e` : `#d9d9d9`)};
  width: 35%;
  @media screen and (max-width: 768px) {
    margin: 20px;
    width: 85%;
    padding-top: 23px;
    border: none;
  }
`
export const Input = styled.input`
  outline: none;
  border: none;
  padding: 6px;
  color: ${props => (props.darkTheme === true ? `#fff` : `#000`)};
  width: 90%;
  background-color: transparent;
  @media screen and (max-width: 768px) {
    border: 1.5px solid
      ${props => (props.darkTheme === true ? `#2e2e2e` : `#d9d9d9`)};
  }
`
export const LoaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 40vh;
`
