import { 
  React, 
  memo, 
  Row, 
  Col, 
  Button,
  useState,
  useCallback
} from '../libraries'

export const ChildComponentD = memo((props) => {
  const [age ,setAge] = useState(27)
  const [salary, setSalary] = useState(100)

  const handleAge = useCallback(() => {
    setAge(age + 1)
  }, [age])
  
  const handleSalary = useCallback(() => {
    setSalary(salary + 100)
  }, [salary])

  return (
    <Row>
      <Col>
        <h4 className='text-center'>Komponen D</h4>
        <Count text='age' count={age} />
        <ButtonAdd handleClick={handleAge}> increment age</ButtonAdd>
        <Count text='salary' count={salary} />
        <ButtonAdd handleClick={handleSalary}> increment salary</ButtonAdd>
      </Col>
    </Row>
  )
})

const Count = memo(({ text, count }) => {
  console.log(`rendering ${text}`)
  return (
    <p>{text} - {count}</p>
  )
})

const ButtonAdd = memo(({ children, handleClick }) => {
  console.log(`rendering ${children}`)
  return (
    <Button variant='primary' onClick={handleClick}>
      {children}
    </Button>
  )
})
