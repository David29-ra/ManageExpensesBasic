import styled from "@emotion/styled"
import { sum } from "../utils/sum"
import Card from "./card"

export default function Cards({data, kind}) {
  return (
    <Gridcontainer>
      {data.filter(item => kind.includes(item.transaction_type)).map((item, index) => (
        <Card id={item.id} key={index} name={item.name} qty={item.transactions.length} total={sum(item.transactions)} />
      ))}
    </Gridcontainer>
  )
}

const Gridcontainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 16px;
  // height: 550px;
  overflow-y: scroll;
  scroll-behavior: smooth;
  ::-webkit-scrollbar {
    display: none;
  }
  ::-webkit-scrollbar-track {
    display: none;
  }
`