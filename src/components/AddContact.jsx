import AddContactForm from "./AddContactForm"
const AddContact = ({dataContacts}) => {
  
  return (
    <div>
      <h2>Add Contact</h2>
      <AddContactForm dataContacts={dataContacts}/>
    </div>
    
  )
}

export default AddContact
