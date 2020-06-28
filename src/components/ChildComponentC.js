import { 
  React, 
  useContext,
  Row,
  Col
} from '../libraries'
import { ListContext } from '../App'

export const ChildComponentC = (props) => {
  
  const context = useContext(ListContext)
  return (
    <Row> 
      <Col>
        <h4 className='text-center'>Komponen C</h4>
        {context.data.map((item) => {
          return <p key={item.id}>{item.name}</p>
        })}
      </Col>
    </Row>
  )
}
