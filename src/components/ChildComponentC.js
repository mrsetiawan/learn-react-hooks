import { 
  React, 
  useContext,
  Row,
  Col
} from '../libraries'
import { ListContext } from '../App'

export const ChildComponentC = (props) => {
  
  const context = useContext(ListContext)
  console.log(context)
  return (
    <Row> 
      <Col>
        <h4 className='text-center'>Komponen C</h4>
        {context.map((item) => {
          return <p key={item.id}>{item.name}</p>
        })}
      </Col>
    </Row>
  )
}
