import './App.css';
import Contacts from './components/Contacts';

const App = () => {

  const myContacts = [
    {
      name: "Fulanito",
      mail: "fulanito@gmail.com"
    },
    {
      name: "Menganito",
      mail: "menganito@gmail.com"
    },
    {
      name: "Otro user",
      mail: "otro@gmail.com"
    }
  ]

  return (
    <div className="App">
      <h1>Contacts App</h1>
      <Contacts contacts={myContacts} />
    </div>
  );
}

export default App;
