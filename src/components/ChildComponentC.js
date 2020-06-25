import { React, useContext } from '../libraries'
import { ThemeContext } from '../App'

export const ChildComponentC = (props) => {
  const theme = useContext(ThemeContext)
  return (
    <> 
      <p>komponen c</p>
      <p>background : {theme.background}</p>
      <p>color : {theme.foreground} </p>
    </>
  )
}
