import styled from '@emotion/styled'

export function Titlelogin({children}) {
  return <Toptitle children = {children} />;
}

export function Titlein({children}) {
  return <Toptitlein children = {children} />;
}

export function Subtitle({children}) {
  return <Sub children = {children} />;
}

const Toptitle = styled.h1`
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 30px;
  line-height: 40px;
  color: #4F4F4F;
  width: 260px;
  text-align: center;
`

const Toptitlein = styled.h1`
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 30px;
  line-height: 40px;
  color: #4F4F4F;
  width: 164px;
  text-align: center;
`

const Sub = styled.h2`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: #4F4F4F;
  width: 260px;
  text-align: center;
`