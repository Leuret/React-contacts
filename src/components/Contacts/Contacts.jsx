import { useState } from "react"
import AddContact from "../AddContact/AddContact"
import ContactList from "../ContactList/ContactList"
import SearchBar from "../SearchBar/SearchBar"
import "./Contacts.css"
import { useContext } from "react";
import ContactContext from '../../contexts/ContactContext'
import ThemeContext from '../../contexts/ThemeContext'


const Contacts = () => {

  const {loadingContacts, errorContacts} = useContext(ContactContext)
  const theme = useContext(ThemeContext)

  const [filter, setFilter] = useState("")

  return (
    <div className={theme}>
      <div className="width-70">
      {
        errorContacts
        ?
          <div>
            <p>There has been an error.</p>
            <p>Please try again in a few minutes.</p>
          </div>
        :
        !loadingContacts
        ?
          <div>
            <SearchBar dataFilter={{filter, setFilter}}/>
            <ContactList filter={filter}/>
            <br></br>
          </div>
        :
          <div>
            <p>Loading...</p>
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