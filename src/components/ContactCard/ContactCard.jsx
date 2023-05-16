import { useState } from "react"
import mailIcon from "./../../assets/envelope-light.svg"
import phoneIcon from "./../../assets/phone-light.svg"
import arrowIcon from "./../../assets/chevron-down-light.svg"
import "./ContactCard.css"

const ContactCard = ({contact,functions}) => {

  const [isShown, setShow] = useState(false)
  const [isEditable, setEdit] = useState(false)
  const [name, setName] = useState(contact.name)
  const [mail, setMail] = useState(contact.mail)
  const [phone, setPhone] = useState(contact.phone)

  const handlerShow = () => setShow(!isShown)
  const handlerEdit = () => setEdit(!isEditable)
  const handlerName = event => setName(event.target.value)
  const handlerMail = event => setMail(event.target.value)
  const handlerPhone = event => setPhone(event.target.value)

  const editContact = () => {
    functions.editContact(contact.id, name, mail, phone)
    setEdit(!isEditable)
  }

  return (
    <div className="card">
      <div className="mt-0">
        <button className="btn btn-outlined btn-rounded mr-1" onClick={handlerShow}><img src={arrowIcon} alt="Show" className={isShown ? "rotate icon" : "icon"} /></button>
        <b>{contact.name}</b>
      </div>
      {
        isShown
        &&
          <div className="mt-1">
            {
              isEditable 
              ?
                <div>
                  <p>Name: <input type="text" id="name" name="name" defaultValue={contact.name} onChange={handlerName}/></p>
                  <p>Mail: <input type="text" id="mail" name="mail"  defaultValue={contact.mail} onChange={handlerMail} /></p>
                  <p>Phone: <input type="text" id="phone" name="phone"  defaultValue={contact.phone} onChange={handlerPhone} /></p>
                  <button className="btn" onClick={editContact}>Edit Contact</button>
                </div>
              :
                <div>
                  <div className="width-50">
                    <img src={mailIcon} alt="mail" className="icon"/>&nbsp;
                    <a href={"mailto:" + contact.mail}>{contact.mail}</a>
                  </div>
                  <div className="width-50">
                    <img src={phoneIcon} alt="phone" className="icon" />&nbsp;
                    <a href={contact.phone}>{contact.phone}</a>
                  </div>
                  <p></p>
                  <button className="btn btn-outlined" onClick={handlerEdit}>Edit</button>
                  <button className="btn btn-outlined ml-1" onClick={() => functions.deleteContact(contact.id)}>Delete</button>
                </div>
            }
          </div>
      }
    </div>
  )
}

export default ContactCard