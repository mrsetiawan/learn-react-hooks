import { 
  React,
  useContext,
  memo,
  Col,
  Row
} from '../libraries'
import { MyContext } from './MainComponent'

export const ChildComponentB = memo((props) => {
  console.log('komponen b')
  const context = useContext(MyContext)
  const { data, loading } = context
  return (
    <Row>
      <Col>
        <h4 className='text-center'>Komponen B</h4>
      </Col>
    </Row>
  )
})
