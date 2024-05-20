import styled from 'styled-components'

export const Img = styled.img`
  width: 160px;
  @media screen and (max-width: 768px) {
    width: 100px;
  }
`
export const HeaderContainerDesktop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-height: 8vh;
  margin-bottom: 20px;
  padding: 15px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`
export const HeaderContainerMobile = styled.div`
  display: none;
  justify-content: space-between;
  align-items: center;
  padding: 13px;
  max-height: 8vh;
  margin-bottom: 15px;
  @media screen and (max-width: 768px) {
    display: flex;
  }
`
export const Button = styled.button`
  background-color: transparent;
  border: ${props =>
    props.darkTheme === true ? `1px solid #f9f9f9` : `1.3px solid #3b82f6`};
  padding: 8px;
  width: 80px;
  height: 35px;
  border-radius: 4px;
  margin: 0 15px;
  color: ${props => (props.darkTheme === true ? `#f9f9f9` : `#3b82f6`)};
  cursor: pointer;
`
export const ChangeBtn = styled.button`
  background-color: transparent;
  outline: none;
  border: none;
  cursor: pointer;
`

export const CloseBtn = styled.button`
  color: #475569;
  background-color: transparent;
  border: 1px solid #475569;
  padding: 12px;
  width: 90px;
  height: 40px;
  border-radius: 4px;
  margin: 0 15px;
  cursor: pointer;
`
export const LogoutBtn = styled.button`
  color: #ffffff;
  background-color: #3b82f6;
  border: 1px solid #3b82f6;
  padding: 12px;
  width: 90px;
  height: 40px;
  border-radius: 4px;
  margin: 0 15px;
  cursor: pointer;
`
export const Para = styled.p`
  color: ${props => (props.darkTheme === true ? `#f9f9f9` : `#3b82f6`)};
`

export const Logout = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  background-color: ${props =>
    props.darkTheme === true ? `#181818` : `#ffffff`};
  padding: 2vw 4vw;
  border-radius: 10px;
`

export const MobileButton = styled.button`
  background-color: transparent;
  outline: none;
  border: none;
  cursor: pointer;
  margin: 0 0 0 4px;
  color: ${props => (props.darkTheme === true ? `#ffffff` : `#181818`)};
  font-size: 20px;
`
export const Hamburger = styled.div`
  background-color: ${props =>
    props.darkTheme === true ? `#181818` : `#ffffff`};
  padding: 2vw 4vw;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const Ul = styled.ul`
  list-style: none;
  margin-top: 30vh;
  width: 100vw;
  padding: 0;
`

export const Li = styled.li`
  text-decoration: none;
  width: 100vw;
  padding-left: 30vw;
  padding-top: 8px;
  padding-bottom: 9px;
  text-align: left;
  background-color: transparent;
  background-color: ${props =>
    props.activeTab === true && props.darkTheme === true ? `#313131` : null};
  background-color: ${props =>
    props.activeTab === true && props.darkTheme === false ? `#e2e8f0` : null};
  font-weight: ${props => (props.activeTab === true ? `bold` : `normal`)};
`
export const MobileNavButton = styled.button`
  background-color: transparent;
  outline: none;
  border: none;
  cursor: pointer;
  margin: 0 0 0 4px;
  padding: 9px 6px;
  color: ${props => (props.darkTheme === true ? `#ffffff` : `#475569`)};
  color: ${props => (props.activeTab === true ? `#ff0000` : null)};
  font-size: 25px;
`
