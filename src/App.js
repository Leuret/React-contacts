import './App.css';
import Contacts from './components/Contacts/Contacts';
import { useEffect, useState } from 'react';
import ContactContext from './contexts/ContactContext'
import ThemeContext from './contexts/ThemeContext'

const App = () => {

  const [contacts, setContacts] = useState([])
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => {
      const dataFormatted = data.map(person => {
        return {
          id: person.id,
          name: person.name,
          mail: person.email,
          phone: person.phone
        }
      })
      .slice(0, 5)

      setContacts(dataFormatted)
    })
  }, [])

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
