import { useState } from "react"
import { useDispatch } from "react-redux"
import {addContact} from './../../slices/contacts/contactsSlice'

const AddContactForm = () => {

  const dispatch = useDispatch()

  // Component States
  const [name, setName] = useState("")
  const [mail, setMail] = useState("")
  const [phone, setPhone] = useState("")

  
  // event Handler Functions
  const handlerName = event => setName(event.target.value)
  const handlerMail = event => setMail(event.target.value)
  const handlerPhone = event => setPhone(event.target.value)

  return (
    <div>
      <div className="card mt-0">
        <h2 className="mt-0">Add Contact</h2>
        <p>Name: <input type="text" id="name" name="name" placeholder="Name" value={name} onChange={handlerName}/></p>
        <p>Mail: <input type="text" id="mail" name="mail" placeholder="Mail" value={mail} onChange={handlerMail} /></p>
        <p>Phone: <input type="text" id="phone" name="phone" placeholder="Phone number" value={phone} onChange={handlerPhone} /></p>
        <button className="btn btn-primary ml-1" onClick={() => dispatch(addContact({name,mail,phone}))}>Add Contact</button>
        <br></br>
      </div>
    </div>
  )
}

export default AddContactForm