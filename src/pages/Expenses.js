import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { LogoutButton, StyledLink } from '../components/button';
import Cards from '../components/cards';
import NavBar from '../components/navbar';
import { Titlein } from '../components/title';
import { CategoriesService } from '../services/categories';

export function Expense() {
  const [data, setData] = useState(JSON.parse(localStorage.getItem('expenses')) || []);
  const location = useLocation();

  useEffect(() => {
    const listAll = async () => {
      const result = new CategoriesService();
      const setdata = await result.list();
      setData(setdata)
      localStorage.setItem('expenses', JSON.stringify(setdata));
    };
    listAll()
  }, [data]);

  function handleLogout() {
    sessionStorage.removeItem('token');
  }

  return (
    <>
      <Titlein children="Expensable" />
      <NavBar />
      <Cards  data={data} kind={location.pathname}/>
      <StyledLink onClick={handleLogout} to="/"><LogoutButton /></StyledLink>
    </>
  )
}