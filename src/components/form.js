import styled from '@emotion/styled';
import { LoginButton } from './button';

export function FormLogin() {
  return (
    <Form>
      
      <DivInput>
        <Label htmlFor="name">Email</Label>
        <Input type="text" id="name" />
      </DivInput>

      <DivInput>
        <Label htmlFor="password">Password</Label>
        <Input type="password" id="amount" />
      </DivInput>

      <LoginButton />
    </Form>
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