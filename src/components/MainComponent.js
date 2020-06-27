import { 
  React, 
  Container,
  Row,
  Col
} from '../libraries'
import { 
  ChildComponentA,
  ChildComponentB, 
  ChildComponentC
} from './'

export const MainComponent = () => {

  return (
    <Container>
      <Row>
        <Col xs={12} className='mb-3 text-center'>
          <h3>React context with hooks</h3>
        </Col>
        <Col>
          <ChildComponentA />
        </Col>
        <Col>
          <ChildComponentB />
        </Col>
        <Col>
          <ChildComponentC />
        </Col>
      </Row>
    </Container>
  )
}
