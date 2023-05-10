import { useState } from "react"
import AddContact from "./AddContact"
import ContactList from "./ContactList"
import SearchBar from "./SearchBar"

const Contacts = ({dataContacts}) => {

  const [filter, setFilter] = useState("")

  return (
    <div>
      <SearchBar dataFilter={{filter, setFilter}}/>
      <ContactList contacts={dataContacts.contacts} filter={filter}/>
      <AddContact dataContacts={dataContacts}/>
      <br></br>
    </div>
    
  )
}

export default Contacts