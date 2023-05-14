import ContactCard from "../ContactCard/ContactCard"

const ContactList = ({dataContacts, filter}) => {

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

  return (
    <div>
      {
        dataContacts.contacts
        .filter(contact =>
          contact.name.length > 0 &&
          contact.name.toLowerCase().includes(filter.toLowerCase())
        )
        .map((contact, index) => <ContactCard contact={contact} functions={{editContact, deleteContact}} key={index}/>)
      }
    </div>
    
  )
}

export default ContactList