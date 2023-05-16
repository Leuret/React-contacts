import './App.css';
import Contacts from './components/Contacts/Contacts';
import { useState } from 'react';
import ContactContext from './contexts/ContactContext'
import ThemeContext from './contexts/ThemeContext'
import useFetch from "./hooks/useFetch"
import { Routes, Route } from "react-router-dom"
import Home from './components/Home/Home'
import Menu from './components/Menu/Menu'
import NotFound from './components/NotFound/NotFound'
import AddContact from './components/AddContact/AddContact';
import ContactCard from './components/ContactCard/ContactCard';

const App = () => {


  // Retrieve data
  const [contacts, setContacts, loadingContacts, errorContacts] = useFetch("https://jsonplaceholder.typicode.com/users")

  const [theme, setTheme] = useState('light')

  const changeTheme = () => {
    setTheme(theme === "dark"? "light" : "dark")
  }

  return (
    <ThemeContext.Provider value={theme}>
      <div className={"App " + theme}>
        <Menu/>
        <p className="align-right">
          <button className="btn" onClick={changeTheme}>Change Theme</button>
        </p>

        <Routes>
          <Route path="/" element={ <Home/> } />
          <Route path="/contacts-list" element={
            <ContactContext.Provider value={{contacts, setContacts, loadingContacts, errorContacts}}>
              <Contacts />
            </ContactContext.Provider>
          } >
          </Route>
          <Route path="/contacts-list/:id" element={
            <ContactContext.Provider value={{contacts, setContacts}}>
              <ContactCard />
            </ContactContext.Provider>
          } >
          </Route>
          <Route path="/add-contact" element={
            <ContactContext.Provider value={{contacts, setContacts}}>
              <AddContact/>
            </ContactContext.Provider> 
          } />
          <Route path="*" element={ <NotFound/> } />
        </Routes>

      </div>
    </ThemeContext.Provider>
  );
}

export default App;
