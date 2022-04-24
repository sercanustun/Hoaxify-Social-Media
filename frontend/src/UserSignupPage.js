import React from "react";
import axios from "axios";

class UserSignupPage extends React.Component {
  state = {
    username: null,
    displayName: null,
    password: null,
    passwordRepeat: null,
  };

  onChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  onClickedSignup = (event) => {
    event.preventDefault();

    const { username, displayName, password } = this.state;

    const body = {
      username,
      displayName,
      password,
    };
    axios.post("/api/1.0/users", body);
  };

  render() {
    return (
      <form>
        <h1>Sign Up</h1>
        <div>
          <label>username</label>
          <input name="username" onChange={this.onChange} />
        </div>
        <div>
          <label>Display Name</label>
          <input name="displayName" onChange={this.onChange} />
        </div>
        <div>
          <label>Password</label>
          <input name="password" onChange={this.onChange} type={"password"} />
        </div>
        <div>
          <label>Password Repeat</label>
          <input
            name="passwordRepeat"
            onChange={this.onChange}
            type={"password"}
          />
        </div>
        <button onClick={this.onClickedSignup}>Sign Up</button>
      </form>
    );
  }
}
export default UserSignupPage;
