import ContactCard from "./ContactCard"

const ContactList = ({contacts}) => {
  
  return (
    <div>
      <h2>Contact List</h2>
      {
        contacts.map((contact, index) => <ContactCard contact={contact} key={index}/>)
      }
    </div>
    
  )
}

export default ContactList