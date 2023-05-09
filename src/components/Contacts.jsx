import AddContact from "./AddContact"
import ContactList from "./ContactList"
import SearchBar from "./SearchBar"

const Contacts = ({contacts}) => {
  
  return (
    <div>
      <SearchBar />
      <ContactList contacts={contacts}/>
      <AddContact />
    </div>
    
  )
}

export default Contacts