import { React, useContext } from '../libraries'
import { ThemeContext } from '../App'

export const ChildComponentB = (props) => {

  const theme = useContext(ThemeContext)

  return (
    <>
      <p>background: {theme.background}</p>
      <p>color: {theme.foreground}</p>
    </>
  )
}
