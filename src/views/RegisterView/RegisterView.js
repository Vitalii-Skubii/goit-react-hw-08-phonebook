import { connect } from 'react-redux';
import React, { Component } from 'react';
import { authOperations } from '../../redux/auth';
import { Paper, Button } from '@material-ui/core';
class RegisterView extends Component {
  state = {
    name: '',
    email: '',
    password: '',
  };
  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.onRegister(this.state);
    this.resetForm();
  };
  resetForm = () => {
    this.setState({
      name: '',
      email: '',
      password: '',
    });
  };
  render() {
    const { name, email, password } = this.state;
    return (
      <div>
        {/* <Paper elevation={3} style={{ padding: 20, display: 'inline-block' }}> */}
        <form
          // className={styles.form}
          onSubmit={this.handleSubmit}
        >
          <input
            // className={styles.input}
            type="text"
            name="name"
            placeholder="Enter name"
            value={name}
            onChange={this.handleChange}
          />
          <input
            // className={styles.input}
            type="email"
            name="email"
            placeholder="Enter email"
            value={email}
            onChange={this.handleChange}
          />
          <input
            // className={styles.input}
            type="password"
            name="password"
            placeholder="Enter password"
            value={password}
            onChange={this.handleChange}
          />
          <button
            // className={styles.btn}
            type="submit"
          >
            Register
          </button>
        </form>
        {/* </Paper> */}
      </div>
    );
  }
}

const mapDispatchToProps = {
  onRegister: authOperations.register,
};
// const mapDispatchToProps = dispatch => ({
//   onRegister: data => dispatch(authOperations.register(data)),
// });

export default connect(null, mapDispatchToProps)(RegisterView);
