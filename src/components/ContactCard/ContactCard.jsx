import { useState } from "react"
import mailIcon from "./../../assets/envelope-light.svg"
import phoneIcon from "./../../assets/phone-light.svg"
import "./ContactCard.scss"
import { useParams } from "react-router-dom"
import { useContext } from "react";
import ContactContext from '../../contexts/ContactContext'
import { useNavigate } from "react-router-dom";

const ContactCard = () => {

  const {contacts, setContacts, deleteContact} = useContext(ContactContext)
  const { id } = useParams()
  const contact = contacts[id - 1]

  const navigate = useNavigate();

  const goToContactList = () => navigate("/contacts-list")

  const [isEditable, setEdit] = useState(false)
  const [name, setName] = useState(contact.name)
  const [mail, setMail] = useState(contact.mail)
  const [phone, setPhone] = useState(contact.phone)

  const handlerEdit = () => setEdit(!isEditable)
  const handlerName = event => setName(event.target.value)
  const handlerMail = event => setMail(event.target.value)
  const handlerPhone = event => setPhone(event.target.value)


  // Function to edit a  Contact
  const editContact = () => {
    setContacts(contacts
    .map( eachContact => {
      if (eachContact === contact)
        return {id, name, mail, phone}
      else
        return eachContact
    }))
    setEdit(!isEditable)
  }

  return (
    <div>
      <button className="btn btn-outlined mr-1" onClick={goToContactList}> &lt; Go back to list</button>

      <div className="card">
        <div className="mt-0">
          <b>{contact.name}</b>
        </div>
        {
          <div className="mt-1">
            {
              isEditable 
              ?
                <div>
                  <p>Name: <input type="text" id="name" name="name" defaultValue={contact.name} onChange={handlerName}/></p>
                  <p>Mail: <input type="text" id="mail" name="mail"  defaultValue={contact.mail} onChange={handlerMail} /></p>
                  <p>Phone: <input type="text" id="phone" name="phone"  defaultValue={contact.phone} onChange={handlerPhone} /></p>
                  <button className="btn btn-outlined" onClick={() => setEdit(!isEditable)}>Cancel</button>
                  <button className="btn btn-primary ml-1" onClick={editContact}>Edit Contact</button>
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
                  <button className="btn btn-outlined ml-1" onClick={() => {
                    deleteContact(contact.id)
                    goToContactList()
                    }}
                  >Delete</button>
                </div>
            }
          </div>
        }
      </div>
    </div>
  )
}

export default ContactCard