import styled from 'styled-components'

export const LoginContainer = styled.div`
  background-color: ${props =>
    props.darkTheme === true ? `#181818` : `#ffffff`};
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
`
export const Card = styled.div`
  background-color: ${props =>
    props.darkTheme === true ? `#0f0f0f` : `#ffffff`};
  padding: 5vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  @media screen and (max-width: 768px) {
    padding: 25px 30px;
  }
`
export const Img = styled.img`
  width: 60%;
  align-self: center;
`
export const Button = styled.button`
  background-color: #3b82f6;
  padding: 8px;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 5px;
`
export const Label = styled.label`
  color: ${props => (props.darkTheme === true ? `#fff` : `#475569`)};
  margin-bottom: 15px;
  font-weight: bold;
`
export const Input = styled.input`
  padding: 7px;
  outline: none;
  margin-bottom: 25px;
`
export const Error = styled.p`
  font-family: 'Roboto';
  font-size: 12px;
  color: #ff0b37;
  align-self: flex-start;
  font-weight: 500;
`
