import './App.css';
import Contacts from './components/Contacts/Contacts';
import { useEffect, useState } from 'react';

const App = () => {

  const [contacts, setContacts] = useState([])

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

  return (
    <div className="App">
      <h1>Contacts App</h1>
      <Contacts dataContacts={{contacts, setContacts}} />
    </div>
  );
}

export default App;
