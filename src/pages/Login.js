// import styled from '@emotion/styled';
import { FormLogin } from '../components/form';
import { Subtitle, Titlelogin } from '../components/title';

export function Login() {
  return (
    <>
      <Titlelogin children="Welcome to expensable" />
      <Subtitle children="Please login to start using the app"/>
      <FormLogin />
    </>
  )
}