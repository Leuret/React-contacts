import ContactCard from "../ContactCard/ContactCard"

const ContactList = ({contacts, filter}) => {

  return (
    <div>
      {
        contacts
        .filter(contact =>
          contact.name.length > 0 &&
          contact.name.toLowerCase().includes(filter.toLowerCase())
        )
        .map((contact, index) => <ContactCard contact={contact} key={index}/>)
      }
    </div>
    
  )
}

export default ContactList