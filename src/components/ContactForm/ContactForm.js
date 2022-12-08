import propTypes from 'prop-types';
import React, { Component } from 'react';
import {
  Form,
  FormName,
  FormNumber,
  FormBtn,
} from 'components/ContactForm/ContactFormstyled.js';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    this.props.handleSubmit(this.state);
    form.reset();
  };

  render() {
    const { name, number } = this.state;

    return (
      <Form onSubmit={this.handleSubmit}>
        <label>Name </label>
        <FormName
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          placeholder="Enter name"
          value={name}
          onChange={this.handleChange}
        />
        <label>Number </label>
        <FormNumber
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          placeholder="Enter phone number"
          value={number}
          onChange={this.handleChange}
        />
        <FormBtn type="submit">Add contact</FormBtn>
      </Form>
    );
  }
}

ContactForm.propTypes = {
  handleSubmit: propTypes.func.isRequired,
};
