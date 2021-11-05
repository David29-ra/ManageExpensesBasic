import styled from "@emotion/styled";

export default function NavBar() {
  return (
    <Navbar>
      <Category>
        <TitleNavBar children="Expenses" />
      </Category>
      <Category>
        <TitleNavBar children="Income" />
      </Category>
    </Navbar>
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
`

const TitleNavBar = styled.p`
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
  color: #4F4F4F;
  text-align: center;
`