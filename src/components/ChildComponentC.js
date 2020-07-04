import { 
  React, 
  useContext,
  memo,
  Row,
  Col,
  Fragment
} from '../libraries'
import { MyContext } from './MainComponent'

export const ChildComponentC = memo((props) => {
  console.log('komponen c')
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
              return <p key={item.id}>name: {item.name}</p>
            })}
          </Fragment>
        )}
      </Col>
    </Row>
  )
})
