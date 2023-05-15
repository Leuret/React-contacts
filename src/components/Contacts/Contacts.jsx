import { useState } from "react"
import AddContact from "../AddContact/AddContact"
import ContactList from "../ContactList/ContactList"
import SearchBar from "../SearchBar/SearchBar"
import "./Contacts.css"
import { useContext } from "react";
import AddContactContext from '../../contexts/AddContactContext'


const Contacts = () => {

  const dataContacts = useContext(AddContactContext)

  const [filter, setFilter] = useState("")

  return (
    <div>
      <div className="width-70">
      {
        dataContacts.contacts.length > 0 
        ?
          <div>
            <SearchBar dataFilter={{filter, setFilter}}/>
            <ContactList filter={filter}/>
            <br></br>
          </div>
        :
          <div>
            <h3>There are no contacts.</h3>
            <p> Use the Add Contact form on the right!</p>
          </div>
      }
      </div>
      <div className="width-30">
        <AddContact />
      </div>
    </div>
    
  )
}

export default Contacts