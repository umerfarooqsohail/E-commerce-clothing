import React from "react";
import './Sign-in.scss';
import Forminput from "../../components/input-form/Forminput";

class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }
  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ email: "", password: "" });
  };
  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2 className="S-title">I have already an account</h2>
        <span className="signin-subtitle">
          Sign in with youre email and password
        </span>
        <form onSubmit={this.handleSubmit}>
          <Forminput
            name="email"
            type="email"
            handleChange={this.handleChange}
            value={this.state.email}
            label="email"
            required
          />

          <Forminput
            name="password"
            type="password"
            value={this.state.password}
            handleChange={this.handleChange}
            label="password"
            required
          />
          <input type="submit" value="Submit Form" />
        </form>
      </div>
    );
  }
}

export default Signin;
