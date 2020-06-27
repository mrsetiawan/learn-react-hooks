import { 
  React, 
  createContext, 
  useState, 
  useEffect,
  axios
} from '../libraries'

export const ListContext = createContext([])

export const ListExample = (props) => {
  const [data, setData] = useState(ListContext)

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        setData(res.data)
      })
      .catch(err => console.log(err))
  }, [data])
 
  return (
    <ListContext.Provider value={data}>
      {props.children}
    </ListContext.Provider>
  )
}
