import { useSelector } from 'react-redux'
import { Link } from "react-router-dom"

const ContactList = () => {
  const contactsRedux = useSelector(state  => state.contacts)


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
            </div>
          ))
        :
          <div>
            <p>There are no results with your filters.</p>
            <p>Modify your filter in order to see results</p>
          </div>
      }
    </div>
    
  )
}



// Redux Connection
export default ContactList;