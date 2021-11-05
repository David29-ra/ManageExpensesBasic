import styled from "@emotion/styled"
import Card from "./card"

export default function Cards() {
  return (
    <Gridcontainer>
      <Card name="Food" qty="4" total="10"/>
      <Card name="Sex" qty="4" total="1000"/>
      <Card name="kines" qty="4" total="1200"/>
      <Card name="Food" qty="4" total="10"/>
      <Card name="Food" qty="4" total="10"/>
    </Gridcontainer>
  )
}

const Gridcontainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 16px;
`