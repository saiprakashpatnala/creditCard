// Style your elements here
import styled from 'styled-components'

export const Container = styled.div`
  background-color: #3b4b69;
`

export const Main = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const CardBgContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/hooks/credit-card-bg.png');
  background-size: cover;
  width: 100%;
  height: 400px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 15px;
`
export const Con = styled.div`
  min-height: 100vh;
  width: 60vw;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Title = styled.h1`
  color: #ffffff;
  font-size: 30px;
  font-family: 'Roboto';
  text-align: center;
  padding: 20px;
`

export const Hr = styled.hr`
  color: #ffd773;
  border-width: 2px;
  border-style: solid;
  width: 120px;
`

export const Name = styled.p`
  color: #ffffff;
  font-size: 20px;
  font-family: 'Roboto';
  padding-left: 30px;
`

export const PaymentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  min-height: 100vh;
  width: 48vw;
  padding: 20px;
`

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;
  padding: 30px;
  box-shadow: 6px 6px 6px 5px #d3d9e0;
`

export const Heading = styled.h1`
  color: #344e7a;
  font-size: 25px;
  font-family: 'Roboto';
`

export const Input = styled.input`
  height: 25px;
  width: 250px;
  padding: 8px;
  border: 1px solid #c3cad9;
  outline: none;
  margin-top: 15px;
`

export const Num = styled.p`
  color: #ffffff;
  font-size: 32px;
  font-family: 'Roboto';
  padding-left: 30px;
  margin-bottom: 15px;
`

export const CardName = styled.p`
  color: #ffffff;
  font-size: 32px;
  font-family: 'Roboto';
  padding-left: 30px;
  margin-top: 15px;
`

export default Container
