import styled from '@emotion/styled';
import { useState } from 'react';
import { SessionsService } from '../services/session';
import { LoginButton, StyledLink } from './button';
import { Redirect } from "react-router";

export function FormLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');

  const login = async () => {
    const result = new SessionsService();
    const toToken = await result.login(email, password);
    setToken(toToken.token);
    console.log(toToken);
    sessionStorage.setItem('token', toToken.token);
  }

  return (
    <>
      {token ? (<Redirect to="/expenses" />) :
      (<Form>
        <DivInput>
          <Label htmlFor="email">Email</Label>
          <Input required placeholder="somebody@mail.com" value={email} onChange={(e) => setEmail(e.target.value)} type="email" name="email" />
        </DivInput>

        <DivInput>
          <Label htmlFor="password">Password</Label>
          <Input required placeholder="******" value={password} onChange={(e) => setPassword(e.target.value)} type="password" name="password" />
        </DivInput>

        <StyledLink onClick={login} to={token? "/" : "/"} ><LoginButton type="submit" /></StyledLink>
      </Form>)}
    </>
  );
}

const Label = styled.label`
  width: 260px;
  height: 24px;
  color: #4F4F4F;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;
`

const DivInput = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 4px;
`

const Input = styled.input`
  width: 260px;
  height: 40px;
  padding: 8px 16px;
  color: #4F4F4F;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  border: 1px solid #2F80ED;
  border-radius: 8px;
  font-size: 16px;
  line-height: 24px;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
`