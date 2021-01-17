import ContactItem from './ContactItem';
import PropTypes from 'prop-types';

export default function ContactList({ contacts, filter, onDelateContacts }) {
  return (
    <>
      {contacts[0] && (
        <ul>
          {contacts.map(contact => (
            <ContactItem
              key={contact.id}
              contact={contact}
              filter={filter}
              onDelateContacts={onDelateContacts}
            />
          ))}
        </ul>
      )}
    </>
  );
}

ContactList.defaultProps = {
  filter: '',
};

ContactList.propTypes = {
  contacts: PropTypes.array,
  filter: PropTypes.string,
  onDelateContacts: PropTypes.func,
};
