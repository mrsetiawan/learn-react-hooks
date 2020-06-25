import { React } from '../libraries'
import { ChildComponentA, ChildComponentC } from './'

export const MainComponent = (props) => {
  return (
    <>
      <ChildComponentA />
      <ChildComponentC />
    </>
  )
}
