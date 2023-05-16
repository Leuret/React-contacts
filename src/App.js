import './App.css';
import Contacts from './components/Contacts/Contacts';
import { useState } from 'react';
import ContactContext from './contexts/ContactContext'
import ThemeContext from './contexts/ThemeContext'
import useFetch from "./hooks/useFetch"

const App = () => {


  // Retrieve data
  const [contacts, setContacts] = useFetch("https://jsonplaceholder.typicode.com/users")

  const [theme, setTheme] = useState('light')

  const changeTheme = () => {
    setTheme(theme === "dark"? "light" : "dark")
  }

  return (
    <ThemeContext.Provider value={theme}>
      <div className={"App " + theme}>
        <h1 className="mt-0">Contacts App</h1>
        <p className="align-right">
          <button className="btn" onClick={changeTheme}>Change Theme</button>
        </p>
        <ContactContext.Provider value={{contacts, setContacts}}>
            <Contacts />
        </ContactContext.Provider>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
