import { React, useContext } from '../libraries'
import { ThemeContext } from '../App'
import { ChildComponentB } from './'

export const ChildComponentA = props => {
  const theme = useContext(ThemeContext)
  return (
    <>
      <p>komponen a 'div'</p>
      <button style={{ background: theme.background, color: theme.foreground }}>
        komponen b 'content'
        <ChildComponentB />
      </button>
    </>
  )
}
