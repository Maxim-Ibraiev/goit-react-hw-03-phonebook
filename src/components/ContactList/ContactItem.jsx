import PropTypes from 'prop-types';

export default function ContactItem({ contact, filter, onDelateContacts }) {
  const { id, name, number } = contact;

  return (
    <>
      {name.toLowerCase().includes(filter.toLowerCase()) && (
        <>
          <li>{`${name}: ${number}`} </li>
          <button onClick={() => onDelateContacts(id)}>Delate</button>
        </>
      )}
    </>
  );
}

ContactItem.defaultProps = {
  filter: '',
};

ContactItem.propTypes = {
  contact: PropTypes.object,
  filter: PropTypes.string,
  onDelateContacts: PropTypes.func,
};
