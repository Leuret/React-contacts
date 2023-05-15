import ContactCard from "../ContactCard/ContactCard"
import { useContext } from "react";
import ContactContext from '../../contexts/ContactContext'

const ContactList = ({filter}) => {

  const dataContacts = useContext(ContactContext)

  // Function to edit a  Contact
  const editContact = (id,name,mail,phone) => {
    dataContacts.setContacts(dataContacts.contacts
    .map( contact => {
      if (contact.id === id)
        return {id, name, mail, phone}
      else
        return contact
    }))
  }

  // Function to delete a  Contact
  const deleteContact = (index) => {
    dataContacts.setContacts(dataContacts.contacts
    .filter( contact =>
      contact.id !== index
    ))
  }

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
          .map((contact, index) => <ContactCard contact={contact} functions={{editContact, deleteContact}} key={index}/>)
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