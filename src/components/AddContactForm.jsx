import { useState } from "react"

const AddContactForm = ({dataContacts}) => {

  const [name, setName] = useState("")
  const [mail, setMail] = useState("")
  const [phone, setPhone] = useState("")

  const handlerName = event => setName(event.target.value)
  const handlerMail = event => setMail(event.target.value)
  const handlerPhone = event => setPhone(event.target.value)

  // Function to add a new Contact
  const addContact = () => 
    dataContacts.setContacts([...dataContacts.contacts, {name,mail,phone}])

  return (
    <div className="card mt-0">
      <h2 className="mt-0">Add Contact</h2>
      <p>Name: <input type="text" id="name" name="name" placeholder="Name" onChange={handlerName}/></p>
      <p>Mail: <input type="text" id="mail" name="mail" placeholder="Mail" onChange={handlerMail} /></p>
      <p>Phone: <input type="text" id="phone" name="phone" placeholder="Phone number" onChange={handlerPhone} /></p>
      <button className="btn" onClick={addContact}>Add Contact</button>
      <br></br>
    </div>
    
  )
}

export default AddContactForm