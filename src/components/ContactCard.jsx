import mailIcon from "./../assets/envelope-light.svg"
import phoneIcon from "./../assets/phone-light.svg"

const ContactCard = ({contact}) => {

  return (
    <div className="card">
      <p className="mt-0"><b>{contact.name}</b></p>
      <div className="width-50"><img src={mailIcon} alt="mail" className="icon"/><a href={"mailto:" + contact.mail}>{contact.mail}</a></div>
      <div className="width-50"><img src={phoneIcon} alt="phone" className="icon" /><a href={contact.phone}>{contact.phone}</a></div>
    </div>
    
  )
}

export default ContactCard