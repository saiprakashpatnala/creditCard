// Write your code here

import {useState} from 'react'

import {
  Container,
  Main,
  CardBgContainer,
  Name,
  PaymentContainer,
  DetailsContainer,
  Heading,
  Input,
  Num,
  CardName,
  Title,
  Con,
} from './styledComponents'

const CreditCard = () => {
  const [number, setNumber] = useState('')
  const [name, setName] = useState('')

  const changeNumber = event => {
    setNumber(event.target.value)
  }

  const changeName = event => {
    setName(event.target.value)
  }

  return (
    <Main>
      <Container>
        <Title>CREDIT CARD</Title>

        <Con>
          <CardBgContainer data-testid="creditCard">
            <Num>{number}</Num>
            <Name>CARDHOLDER NAME</Name>
            <CardName>{name.toUpperCase()}</CardName>
          </CardBgContainer>
        </Con>
      </Container>
      <PaymentContainer>
        <DetailsContainer>
          <Heading>Payment Method</Heading>
          <Input
            placeholder="Card Number"
            type="text"
            onChange={changeNumber}
            value={number}
          />
          <Input
            placeholder="Cardholder Name"
            type="text"
            onChange={changeName}
            value={name}
          />
        </DetailsContainer>
      </PaymentContainer>
    </Main>
  )
}

export default CreditCard
