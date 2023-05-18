import { useEffect } from "react";
import { connect } from 'react-redux'
import { getFemales } from '../../actions/Contacts'

const ContactList = ({dispatch, contactsRedux}) => {

  // Get Contact from Redux
  useEffect(() => {
    dispatch(getFemales())
  }, [dispatch]);

  return (
    <div>
      {
        contactsRedux.length > 0
        ?
        contactsRedux
          .map((contact, index) => (
            <div className="card card-contact" key={index}>
                <span>{contact.name} &gt; </span>
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

// Redux State Mapping
const mapStateToProps = (state) => ({
  contactsRedux: state
});

// Redux Connection
export default connect(mapStateToProps)(ContactList);