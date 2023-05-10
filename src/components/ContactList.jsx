import ContactCard from "./ContactCard"

const ContactList = ({contacts, filter}) => {

  const filtered = contacts.filter( contact => {
    const name =contact.name
    console.log(filter)
    return name.includes(filter)
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