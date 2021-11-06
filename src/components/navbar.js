import styled from "@emotion/styled";
import { useLocation } from "react-router";
import { StyledLink } from "./button";

export default function NavBar() {
  const location = useLocation().pathname
  const active = "/expenses" === location

  return (
    <>
      <Navbar>
        <Category active={active} >
          <StyledLink to="/expenses"><TitleNavBar active={active} children="Expenses" /></StyledLink>
        </Category>
        <Category active={!active}>
        <StyledLink to="income"><TitleNavBar active={!active} children="Income" /></StyledLink>
        </Category>
      </Navbar>
    </>
  );
}

const Navbar = styled.ul`
  display: flex;
  gap: 8px;
  align-items: center;
  list-style-type: none;
`

const Category = styled.li`
  border-bottom: 2px solid #BDBDBD;
  ${({active}) => active && 
  `border-bottom: 2px solid #2196F3;`}
`

const TitleNavBar = styled.p`
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
  color: #BDBDBD;
  ${({active}) => active && 
  `color: #4F4F4F;`}
  text-align: center;
`