import { useContext } from "react";
import ContactContext from '../../contexts/ContactContext'
import { Link } from "react-router-dom"
import arrowIcon from "./../../assets/chevron-down-light.svg"

const ContactList = ({filter}) => {

  const dataContacts = useContext(ContactContext)

  const filteredContacts = dataContacts.contacts
  .filter(contact =>
    contact.name.length > 0 &&
    contact.name.toLowerCase().includes(filter.toLowerCase())
  )

  return (
    <div>
      {
        filteredContacts.length > 0
        ?
          filteredContacts
          .map((contact, index) => (
            <div className="card" key={index}>
              <Link to={`/contacts-list/${contact.id}`}>{contact.name} <img src={arrowIcon} alt="Show" className="rotate-right icon" /></Link>
            </div>
          ))
        :
          <div>
            <p>There are no results with your filters.</p>
            <p>Modify your filter in order to see results</p>
          </div>
      }
    </div>
    
  )
}

export default ContactList