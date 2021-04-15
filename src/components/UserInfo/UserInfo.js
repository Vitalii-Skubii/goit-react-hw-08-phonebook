import React from 'react';
import { connect } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';

const UserInfo = ({ name, email, onLogout }) => (
  <div>
    {/* <img src={avatar} alt="" /> */}
    <h1>{name}</h1>
    <p>{email}</p>
    <button type="button" onClick={onLogout}>
      LogOut
    </button>
  </div>
);
const mapStateToProps = state => ({
  name: authSelectors.getUsername(state),
  email: authSelectors.getUseremail(state),
  // avatar:img
});

const mapDispatchToProps = {
  onLogout: authOperations.logOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserInfo);
