import {Component} from 'react'
import Cookies from 'js-cookie'

import {
  LoginContainer,
  Card,
  Img,
  Button,
  FormContainer,
  Label,
  Input,
  Error,
} from './styledComponents'

import ToogleContent from '../../context/ToogleContent'

class Login extends Component {
  state = {
    username: '',
    password: '',
    showPass: false,
    error: false,
    errMsg: '',
  }

  user = event => {
    this.setState({username: event.target.value})
  }

  pass = event => {
    this.setState({password: event.target.value})
  }

  clicked = () => {
    this.setState(prev => ({showPass: !prev.showPass}))
  }

  fromSubmit = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}

    const url = 'https://apis.ccbp.in/login'

    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, options)
    const data = await response.json()

    if (response.ok === true) {
      const {history} = this.props
      Cookies.set('jwt_token', data.jwt_token, {expires: 30})
      history.replace('/')
    } else {
      this.setState({error: true, errMsg: data.error_msg})
    }
  }

  render() {
    const {error, errMsg, showPass} = this.state
    const type = showPass ? `text` : `password`
    const {history} = this.props
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      history.replace('/')
    }
    return (
      <ToogleContent.Consumer>
        {value => {
          const {darkTheme} = value
          const logoimg = darkTheme
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
          return (
            <LoginContainer darkTheme={darkTheme}>
              <Card darkTheme={darkTheme}>
                <Img src={logoimg} />
                <FormContainer onSubmit={this.fromSubmit}>
                  <Label htmlFor="username" darkTheme={darkTheme}>
                    USERNAME
                  </Label>
                  <Input
                    onChange={this.user}
                    placeholder="Username"
                    id="username"
                  />
                  <Label htmlFor="password" darkTheme={darkTheme}>
                    PASSWORD
                  </Label>
                  <Input
                    onChange={this.pass}
                    placeholder="Password"
                    id="password"
                    type={type}
                  />
                  <div>
                    <Input onClick={this.clicked} type="checkbox" id="check" />
                    <Label htmlFor="check" darkTheme={darkTheme}>
                      Show Password
                    </Label>
                  </div>
                  <Button type="submit">Login</Button>
                  {error ? <Error>{errMsg}</Error> : null}
                </FormContainer>
              </Card>
            </LoginContainer>
          )
        }}
      </ToogleContent.Consumer>
    )
  }
}

export default Login
