import propTypes from 'prop-types';
import {
  ContactListItemBtn,
  ContactListUl,
} from 'components/ContactList/ContactList.styled';

export const ContactList = ({ contacts, handleDelete }) => (
  <div>
    <ContactListUl>
      {contacts.map((contact, id) => (
        <li key={id}>
          {contact.name}: {contact.number}
          <ContactListItemBtn
            type="button"
            onClick={() => handleDelete(contact.id)}
          >
            Delete
          </ContactListItemBtn>
        </li>
      ))}
    </ContactListUl>
  </div>
);

ContactList.propTypes = {
  contacts: propTypes.arrayOf(
    propTypes.exact({
      id: propTypes.string.isRequired,
      name: propTypes.string.isRequired,
      number: propTypes.string.isRequired,
    })
  ),
  handleDelete: propTypes.func.isRequired,
};
