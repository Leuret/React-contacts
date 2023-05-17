import { useState } from "react"
import ContactList from "../ContactList/ContactList"
import SearchBar from "../SearchBar/SearchBar"
import "./Contacts.scss"
import { useContext } from "react";
import ContactContext from '../../contexts/ContactContext'
import ThemeContext from '../../contexts/ThemeContext'
import { Link } from "react-router-dom"


const Contacts = () => {

  const {loadingContacts, errorContacts} = useContext(ContactContext)
  const theme = useContext(ThemeContext)

  const [filter, setFilter] = useState("")

  return (
    <div className={theme}>
      <div>
        <Link className="btn btn-primary mb-1" to="/add-contact">Add contact</Link>
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
    </div>
    
  )
}

export default Contacts