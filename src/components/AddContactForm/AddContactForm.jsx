import { useState } from "react"
import './AddContactForm.css';
import { useContext } from "react";
import ContactContext from '../../contexts/ContactContext'

const AddContactForm = () => {

  const {contacts, setContacts} = useContext(ContactContext)

  // Component States
  const [name, setName] = useState("")
  const [mail, setMail] = useState("")
  const [phone, setPhone] = useState("")

  
  // event Handler Functions
  const handlerName = event => setName(event.target.value)
  const handlerMail = event => setMail(event.target.value)
  const handlerPhone = event => setPhone(event.target.value)

  // Function to add a new Contact
  const addContact = () => {
    const total = contacts.length + 1
    setContacts([...contacts, {total,name,mail,phone}])
    setName("")
    setMail("")
    setPhone("")
  }

  return (
    <div className="card mt-0">
      <h2 className="mt-0">Add Contact</h2>
      <p>Name: <input type="text" id="name" name="name" placeholder="Name" value={name} onChange={handlerName}/></p>
      <p>Mail: <input type="text" id="mail" name="mail" placeholder="Mail" value={mail} onChange={handlerMail} /></p>
      <p>Phone: <input type="text" id="phone" name="phone" placeholder="Phone number" value={phone} onChange={handlerPhone} /></p>
      <button className="btn" onClick={addContact}>Add Contact</button>
      <br></br>
    </div>
  )
}

export default AddContactForm