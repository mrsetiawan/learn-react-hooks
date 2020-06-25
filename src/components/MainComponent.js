import { React, useState, useEffect, createContext, axios } from '../libraries'
import { ChildComponentA, ChildComponentC } from './'

export const MyContext = createContext([])

export const MainComponent = (props) => {
  const [data, setData] = useState([])

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        setData(res.data)
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <div className='container'>
      <ChildComponentA />
      <MyContext.Provider value={data}>
        <ChildComponentC />
      </MyContext.Provider>
    </div>
  )
}
