import './App.css';
import Contacts from './components/Contacts';
import { useState } from 'react';

const App = () => {

  const [contacts, setContacts] = useState([
    {
      name: "Fulanito",
      mail: "fulanito@gmail.com",
      phone: "12345678"
    },
    {
      name: "Menganito",
      mail: "menganito@gmail.com",
      phone: "87654321"
    },
    {
      name: "Otro user",
      mail: "otro@gmail.com",
      phone: "348973248"
    }
  ])

  return (
    <div className="App">
      <h1>Contacts App</h1>
      <Contacts dataContacts={{contacts, setContacts}} />
    </div>
  );
}

export default App;
