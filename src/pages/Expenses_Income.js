import { LogoutButton } from '../components/button';
import Cards from '../components/cards';
import NavBar from '../components/navbar';
import { Titlein } from '../components/title';

export function Navigate() {
  return (
    <>
      <Titlein children="Expensable" />
      <NavBar />
      <Cards />
      <LogoutButton />
    </>
  )
}