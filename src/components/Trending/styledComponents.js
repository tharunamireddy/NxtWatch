import styled from 'styled-components'

export const HomeContainer = styled.div`
  min-height: 100vh;
  background-color: ${props =>
    props.darkTheme === true ? `#212121` : `#ffffff`};
`
export const Content = styled.div`
  display: flex;
  background-color: ${props =>
    props.darkTheme === true ? `#181818` : `#f9f9f9`};
  max-height: 92vh;
  overflow-y: auto;
  @media screen and (max-width: 768px) {
    display: block;
  }
`

export const MainContainer = styled.div`
  display: block;
  width: 80vw;
  height: 100vh;
  margin-left: 20vw;
  @media screen and (max-width: 768px) {
    width: 100vw;
    margin-left: 0;
  }
`
export const TrendingVideosContainer = styled.div`
  flex-grow: 1;
  overflow-y: auto;
  background-color: ${props => props.bgColor};
`
export const TrendingVideosContent = styled.ul`
  padding-left: 0;
  list-style-type: none;
  padding-left: 20px;
  margin-top: 0;
  @media screen and (max-width: 567px) {
    padding: 5px;
  }
`
export const TrendingHeadingContainer = styled.div`
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  background-color: ${props =>
    props.trendbg === 'true' ? '#212121' : '#ebebeb'};
  padding: 10px;
  padding-left: 20px;
  margin-bottom: 0;
`
export const TitleIconContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: ${props =>
    props.iconcolor === 'true' ? '#475569' : '#cbd5e1'};
  padding: 5px;
  border-radius: 50%;
`
export const TrendingHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 20px;
  margin-left: 10px;
  color: ${props => props.color};
`
export const LoaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 40vh;
`
