import { 
  React, 
  createContext, 
  useEffect,
  useReducer,
  axios
} from './libraries'
import { MainComponent } from './components'
import './App.css'

export const ListContext = createContext()

const initialState = {
  data: [],
  loading: true
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_DATA':
      return {
        ...state,
        data: [...action.payload]
      }
    case 'INIT_DATA':
      return {
        ...state,
        loading: !state.loading 
      }
    default :
      return state
  }
}

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        dispatch({ type: 'FETCH_DATA', payload: res.data })
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <ListContext.Provider value={state}>
      <MainComponent />
    </ListContext.Provider>
  )
}

export default App
