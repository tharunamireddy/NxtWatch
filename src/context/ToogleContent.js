import React from 'react'

const ToggleContext = React.createContext({
  darkTheme: false,
  activeTab: 'Home',
  toggleTheme: () => {},
  changeTab: () => {},
})
export default ToggleContext
