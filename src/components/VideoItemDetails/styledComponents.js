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
export const VideoDetailsContainer = styled.div`
  padding: 20px;
`
export const LoaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 40vh;
`
