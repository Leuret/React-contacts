import { Link } from "react-router-dom"
import styled from 'styled-components'

const MenuBar = styled.div`
  background: #8118b7;
  display:flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  ul {
    margin: 0;
  }
}
`;

const Li = styled.li`
  border-radius: .5rem;
  display: inline-block;
  padding: .5rem 1rem;
  &:not(:first-child) {
    margin-left: 3rem;
  }
  &:hover {
    background-color: #fff;
  }

  & a{
    color: #fff;
    text-decoration: none
  }
  &:hover a{
    color: #8118b7;
  }
}
`;

const Button = styled.button`
  background: transparent;
  border: 1px solid #fff;
  border-radius: .5rem;
  color: #fff;
  cursor: pointer;
  padding: .5rem 1rem;
  
  &:hover {
    background-color: #fff;
    color: #8118b7;
  }
}
`;


const Header = ({themeParams}) => {

  const changeTheme = () => {
    themeParams.setTheme(themeParams.theme === "dark"? "light" : "dark")
  }

  return (
    <MenuBar>
        <ul>
          <Li><Link to="/">Home</Link></Li>
          <Li><Link to="/contacts-list">Contacts</Link></Li>
          <Li><Link to="/contacts-redux">Contacts Redux</Link></Li>
        </ul>
        <p className="align-right">
          <Button onClick={changeTheme}>Change Theme</Button>
        </p>
    </MenuBar>
  )
}

export default Header