import { 
  React,
  useContext,
  Row,
  Col,
  Button
} from '../libraries'

export const ChildComponentA = props => {
  return (
    <Row>
      <Col>
        <h4 className='text-center'>Komponen A</h4>
      </Col>
    </Row>
  )
}
