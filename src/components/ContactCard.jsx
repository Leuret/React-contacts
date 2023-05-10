const ContactCard = ({contact}) => {

  return (
    <div className="card">
      <p><b>{contact.name}</b></p>
      <p>{contact.mail}</p>
      <p>{contact.phone}</p>
    </div>
    
  )
}

export default ContactCard