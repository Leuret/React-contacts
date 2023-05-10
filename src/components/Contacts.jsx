import { useState } from "react"
import AddContact from "./AddContact"
import ContactList from "./ContactList"
import SearchBar from "./SearchBar"

const Contacts = ({dataContacts}) => {

  const [filter, setFilter] = useState("")

  return (
    <div>
      <div className="width-70">
        <SearchBar dataFilter={{filter, setFilter}}/>
        <ContactList contacts={dataContacts.contacts} filter={filter}/>
      </div>
      <div className="width-30">
        <AddContact dataContacts={dataContacts}/>
      </div>
      <br></br>
    </div>
    
  )
}

export default Contacts