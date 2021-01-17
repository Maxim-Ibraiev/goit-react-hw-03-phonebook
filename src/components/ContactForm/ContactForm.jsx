import { Component } from 'react';
import PropTypes from 'prop-types';

const INITIAL_STATE = {
  name: '',
  number: '',
};

export default class ContactForm extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      number: '',
    };
  }

  static propTypes = {
    onSubmit: PropTypes.func,
    onSetContacts: PropTypes.func,
  };

  handleChange = ({ target }) => {
    const { name, value } = target;

    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { name, number } = this.state;
    const { contacts } = this.props;

    if (contacts.find(contact => contact.name === name))
      return alert(`${name} is already in contacts`);

    this.props.onSetContacts(name, number);
    this.reset();
  };

  reset = () => {
    this.setState({ ...this.state, ...INITIAL_STATE });
  };

  render() {
    const { name, number } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <h2>Name</h2>
          <input
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
          />
        </label>
        <label>
          <h2>Number</h2>
          <input
            type="text"
            name="number"
            value={number}
            onChange={this.handleChange}
          />
        </label>

        <button type="submit">Add contact</button>
      </form>
    );
  }
}
