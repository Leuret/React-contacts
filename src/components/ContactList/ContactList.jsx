import { useContext } from "react";
import ContactContext from '../../contexts/ContactContext'
import { Link } from "react-router-dom"
import './ContactList.scss'

const ContactList = ({filter}) => {

  const {contacts, deleteContact} = useContext(ContactContext)

  const filteredContacts = contacts
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
            <div className="card card-contact" key={index}>
              <Link to={`/contacts-list/${contact.id}`}>
                <span>{contact.name} &gt; </span>
              </Link>
              <div>
                <div className="btn btn-outlined d-inline-block"  onClick={() => deleteContact(contact.id)}> Delete contact </div>
              </div>
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