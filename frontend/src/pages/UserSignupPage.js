import React from "react";
import axios from "axios";
import { signup } from "../api/apiCalls";

class UserSignupPage extends React.Component {
  state = {
    username: null,
    displayName: null,
    password: null,
    passwordRepeat: null,
    pendingApiCall: false,
  };

  onChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  onClickedSignup = async (event) => {
    event.preventDefault();

    const { username, displayName, password } = this.state;

    const body = {
      username,
      displayName,
      password,
    };
    this.setState({ pendingApiCall: true });
    try {
      const response = await signup(body);
    } catch (error) {}
    this.setState({ pendingApiCall: false });
  };

  render() {
    const { pendingApiCall } = this.state;
    return (
      <div className="container">
        <form>
          <h1 className="text-center">Sign Up</h1>
          <div className="form-group">
            <label>username</label>
            <input
              className="form-control"
              name="username"
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <label>Display Name</label>
            <input
              className="form-control"
              name="displayName"
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              className="form-control"
              name="password"
              onChange={this.onChange}
              type={"password"}
            />
          </div>
          <div className="form-group">
            <label>Password Repeat</label>
            <input
              name="passwordRepeat"
              onChange={this.onChange}
              type={"password"}
              className="form-control"
            />
          </div>
          <div className="text-center">
            <button
              className="btn btn-primary"
              onClick={this.onClickedSignup}
              disabled={pendingApiCall}
            >
              {pendingApiCall && (
                <span className="spinner-border spinner-border-sm"> </span>
              )}
              Sign Up
            </button>
          </div>
        </form>
      </div>
    );
  }
}
export default UserSignupPage;
