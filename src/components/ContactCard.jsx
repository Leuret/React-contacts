const ContactCard = ({contact}) => {
  
  return (
    <div className="card">
      <p>{contact.name}</p>
      <p>{contact.mail}</p>
    </div>
    
  )
}

export default ContactCard