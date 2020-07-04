import { 
  React,
  useContext,
  memo,
  Row,
  Col,
  Button
} from '../libraries'
import { MyContext } from './MainComponent'

export const ChildComponentA = memo((props) => {
  console.log('komponen a')
  const context = useContext(MyContext)
  const { data, loading } = context
  return (
    <Row>
      <Col>
        <h4 className='text-center'>Komponen A</h4>
      </Col>
    </Row>
  )
})
