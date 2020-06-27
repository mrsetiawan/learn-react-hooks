import { 
  React,
  useContext,
  Row,
  Col,
  Button
} from '../libraries'
import { ThemeContext } from '../App'

export const ChildComponentA = props => {
  return (
    <Row>
      <Col>
        <h4 className='text-center'>Komponen A</h4>
        <Button>
          button
        </Button>
      </Col>
    </Row>
  )
}
