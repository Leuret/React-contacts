import { useSelector, useDispatch } from 'react-redux'
import { Link } from "react-router-dom"
import AddContactForm from './ReduxAddContact'
import {deleteContact} from './../../slices/contacts/contactsSlice'

const ContactList = () => {
  const contactsRedux = useSelector(state  => state.contacts.contacts)

  const dispatch = useDispatch()

  return (
    <div>
      {
        contactsRedux.length > 0
        ?
        contactsRedux
          .map((contact, index) => (
            <div className="card card-contact" key={index}>
              <Link to={`/contacts-list/${contact.id}`}>
                <span>{contact.name} &gt; </span>
              </Link>
              <div>
                <div className="btn btn-outlined d-inline-block"  onClick={() =>  dispatch(deleteContact(index))}> Delete contact </div>
              </div>
            </div>
          ))
        :
          <div>
            <p>There are no results with your filters.</p>
            <p>Modify your filter in order to see results</p>
          </div>
      }
      <AddContactForm />
    </div>
    
  )
}



// Redux Connection
export default ContactList;