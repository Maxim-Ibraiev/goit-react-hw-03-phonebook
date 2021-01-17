import { Component } from 'react';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';
import { v4 as uuIdv4 } from 'uuid';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const LocalContacts = JSON.parse(localStorage.getItem('contacts'));

    this.setState({ contacts: LocalContacts });
  }

  componentDidUpdate() {
    const { contacts } = this.state;

    localStorage.setItem('contacts', JSON.stringify(contacts));
  }

  handleSetContacts(name, number) {
    this.setState(prevState => {
      const { contacts } = prevState;
      const newContacts = [...contacts, { id: uuIdv4(), name, number }];

      return { contacts: newContacts };
    });
  }

  handleDelateContacts(id) {
    this.setState(prevState => {
      const { contacts } = prevState;
      const updatedContacts = contacts.filter(contact => contact.id !== id);

      return { contacts: [...updatedContacts] };
    });
  }

  handleFilter = ({ target }) => {
    const { name, value } = target;

    this.setState({ [name]: value });
  };

  render() {
    const { contacts, filter } = this.state;

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm
          contacts={contacts}
          onSubmit={this.handleSubmit}
          onSetContacts={(name, number) => this.handleSetContacts(name, number)}
        />

        <h2>Contacts</h2>
        <Filter filter={filter} onChange={this.handleFilter} />
        <ContactList
          contacts={contacts}
          filter={filter}
          onDelateContacts={id => this.handleDelateContacts(id)}
        />
      </div>
    );
  }
}

export default App;
