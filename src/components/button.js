import styled from '@emotion/styled';

export function LoginButton () {
  return (
    <Login children = {"Login"}/>
  )
}

export function LogoutButton () {
  return (
    <Logout children = {"Log out"}/>
  )
}

const Login = styled.button`
  width: 77px;
  height: 40px;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  border-radius: 8px;
  padding: 8px 16px;
  background-color: #2F80ED;
  color: #FFFFFF;
`

const Logout = styled.button`
  width: 93px;
  height: 40px;
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 24px;
  border-radius: 8px;
  border: 1px solid #2F80ED;
  padding: 8px 16px;
  color: #2F80ED;
  position: absolute;
  top: 740px;
` 