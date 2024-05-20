import styled from 'styled-components'

export const NavContainerDesktop = styled.div`
  background-color: ${props =>
    props.darkTheme === true ? `#212121` : `#ffffff`};
  height: 94vh;
  width: 18vw;
  margin-top: -16px;
  position: absolute;
  @media screen and (max-width: 768px) {
    display: none;
  }
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

export const Ul = styled.ul`
  list-style: none;
  padding: 0;
  margin-left: 35px;
`

export const Li = styled.li`
  text-decoration: none;
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
export const ContactsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  margin-top: 43vh;
  margin-left: 35px;
  color: ${props => (props.navcolor === 'true' ? '#f9f9f9' : '#231f20')};
`
export const ContactsUs = styled.p`
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: 900;
`
export const ContactIcons = styled.div``
export const ContactImage = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 10px;
`
export const ContactDescription = styled.p`
  font-family: 'Roboto'
  font-size: 16px;
`
export const A = styled.a``
