import { useState } from "react"
import AddContact from "../AddContact/AddContact"
import ContactList from "../ContactList/ContactList"
import SearchBar from "../SearchBar/SearchBar"
import "./Contacts.css"

const Contacts = ({dataContacts}) => {

  const [filter, setFilter] = useState("")

  return (
    <div>
      <div className="width-70">
      {
        dataContacts.contacts.length > 0 
        ?
          <div>
            <SearchBar dataFilter={{filter, setFilter}}/>
            <ContactList contacts={dataContacts.contacts} filter={filter}/>
          </div>
        :
          <p>There are no contacts. Use the Add Contact form on the right!</p>
      }
      </div>
      <div className="width-30">
        <AddContact dataContacts={dataContacts}/>
      </div>
      <br></br>
    </div>
    
  )
}

export default Contacts