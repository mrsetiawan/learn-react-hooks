import { React, useContext } from '../libraries'
import { ThemeContext } from '../App'
import { MyContext } from './MainComponent'

export const ChildComponentC = (props) => {
  const theme = useContext(ThemeContext)
  const user = useContext(MyContext)
  return (
    <> 
      <p>komponen c</p>
      <p>background : {theme.background}</p>
      <p>color : {theme.foreground} </p>
      <p>user dari context main component</p>
      {user.map((item, index) => {
        return (
          <div key={index}>
            <p>nama: {item.name}</p>
            <p>email: {item.email}</p>
          </div>
        )
      })}
    </>
  )
}
