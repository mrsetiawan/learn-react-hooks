import { 
  React,
  memo
} from './libraries'
import { MainComponent } from './components'
import './App.css'

const App = memo((props) => {
  return (
    <MainComponent />
  )
})

export default App
