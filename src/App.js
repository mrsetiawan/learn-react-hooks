import { 
  React, 
  createContext, 
  useState, 
  useEffect,
  axios
} from './libraries'
import { MainComponent } from './components'
import './App.css'

export const ListContext = createContext([])

const App = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        setData(res.data)
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <ListContext.Provider value={data}>
      <MainComponent />
    </ListContext.Provider>
  )
}

export default App
