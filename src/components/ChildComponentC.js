import { 
  React, 
  useContext,
  Row,
  Col,
  Fragment
} from '../libraries'
import { MyContext } from './MainComponent'

export const ChildComponentC = (props) => {
  
  const context = useContext(MyContext)
  const { data, loading } = context
  return (
    <Row> 
      <Col>
        <h4 className='text-center'>Komponen C</h4>
        {loading ? (
          <p>loading...</p>
        ) : (
          <Fragment>
            {data.map((item) => {
              return <p key={item.id}>{item.name}</p>
            })}
          </Fragment>
        )}
      </Col>
    </Row>
  )
}
