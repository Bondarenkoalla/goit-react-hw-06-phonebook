import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import actions from "../../redux/actions";
const Finder = ({ value, onChange }) => {
  return (
    <>
      <p>Find contacts by name</p>
      <input type="text" name="name" value={value} onChange={onChange} />
    </>
  );
};
const mapStateToProps = (state) => ({

  value: state.filter,
});
const mapDispatchToProps = dispatch => ({ onChange: (e) => dispatch(actions.filterContacts(e.currentTarget.value)) });


export default connect(mapStateToProps, mapDispatchToProps)(Finder);
Finder.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
