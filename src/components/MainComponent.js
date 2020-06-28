import { 
  React,
  createContext,
  useEffect, 
  useReducer, 
  Container,
  Row,
  Col,
  axios
} from '../libraries'
import { 
  ChildComponentA,
  ChildComponentB, 
  ChildComponentC
} from './'
import { appConstants } from '../constants'

export const MyContext = createContext()

const initialState = {
  data: [],
  loading: true,
  error: null
}

const reducer = (state, action) => {
  switch (action.type) {
    case appConstants.FETCH_SUCCESS :
      return {
        ...state,
        data: [...action.payload],
        loading: false,
        error: null
      }
    case appConstants.FETCH_REQUEST : 
      return {
        ...state, 
        loading: !state.loading
      }
    case appConstants.FETCH_FAILED :
      return {
        ...state,
        error: { ...action.payload }
      }
    default :
      return state
  }   
}

const fetchRequest = () => ({
  type: appConstants.FETCH_REQUEST
})

const fetchSuccess = (data) => ({
  type: appConstants.FETCH_SUCCESS,
  payload: data
})

const fetchFailed = (messagge) => ({
  type: appConstants.FETCH_FAILED,
  payload: messagge
})

export const MainComponent = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    dispatch(fetchRequest())
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        const { data, status } = response
        if (status === 200) {
          dispatch(fetchSuccess(data))
        } else {
          dispatch(fetchFailed(data))
        }
      })
      .catch(() => dispatch(fetchFailed('data not found')))
  }, [])

  return (
    <Container>
      <Row>
        <Col xs={12} className='mb-3 text-center'>
          <h3>Learn React hooks with context and reducer </h3>
        </Col>
        <MyContext.Provider value={state}>
          <Col>
            <ChildComponentA />
          </Col>
          <Col>
            <ChildComponentB />
          </Col>
          <Col>
            <ChildComponentC />
          </Col>
        </MyContext.Provider>
      </Row>
    </Container>
  )
}
