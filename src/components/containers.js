import styled from '@emotion/styled';

export function ContainerApp ({children}) {
  return (
    <Container children = {children} />
  )
}

const Container = styled.div`
  width: 376px;
  height: 812px;
  background-color: #fafafa;
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  padding: 32px 58px;
  margin: 0 auto;
`
