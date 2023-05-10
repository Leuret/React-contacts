import ContactCard from "../ContactCard/ContactCard"

const ContactList = ({contacts, filter}) => {

  const filtered = contacts.filter( contact => {
    const name =contact.name.toLowerCase()
    return name.includes(filter.toLowerCase())
  })

  return (
    <div>
      {
        filtered.map((contact, index) => <ContactCard contact={contact} key={index}/>)
      }
    </div>
    
  )
}

export default ContactList