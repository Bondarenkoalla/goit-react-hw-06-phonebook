import React from "react";
import PropTypes from "prop-types";
import FormItem from "../FormItem/FormItem";
import actions from "../../redux/actions"
import { connect } from "react-redux";
const FormList = ({ contacts, deleteItem }) => {
  return (
    <ul>
      {contacts.map(({ name, id, number }) => (
        <FormItem
          name={name}
          id={id}
          number={number}
          deleteItem={() => deleteItem(id)}
        />
      ))}
    </ul>
  );
};

const mapStateToProps = (state) => {
  const { filter, items } = state.contacts;
  const normalizedFilter = filter.toLowerCase();
  const visibleContacts = items.filter(({ name }) => name.toLowerCase().includes(normalizedFilter))
  return { contacts: visibleContacts }
};
const mapDispatchToProps = dispatch => ({ deleteItem: id => dispatch(actions.deleteContact(id)) })


export default connect(mapStateToProps, mapDispatchToProps)(FormList);
FormList.propTypes = {
  contacts: PropTypes.array.isRequired,
  deleteItem: PropTypes.func.isRequired,
};
