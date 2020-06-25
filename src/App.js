import { React, createContext } from './libraries'
import { MainComponent } from './components'
import './App.css'

const themes = {
  light: {
    foreground: '#000000',
    background: '#eeeeee'
  },
  dark: {
    foreground: '#ffffff',
    background: '#222222'
  }
}

export const ThemeContext = createContext(themes)

const App = () => {
  return (
    <ThemeContext.Provider value={themes.dark}>
      <MainComponent />
    </ThemeContext.Provider>
  )
}

export default App
