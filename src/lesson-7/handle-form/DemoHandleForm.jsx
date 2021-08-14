import React, { Component } from "react";

export default class DemoHandleForm extends Component {
  state = {
    email: "",
    passwd: "",
    emailErr: "",
    passwdErr: "",
  };

  handleChange = (e) => {
    //element xayr ra suwj kieenj onchange
    // console.log(e.target);
    const { name, value } = e.target;
    this.setState(
      {
        [name]: value,
      },
      () => {
        console.log(this.state);
      }
    );
  };

  validate = () => {
    let emailErr = "";
    let paswdErr = "";
    if (!this.state.email) {
      emailErr = "Email cannot bo blank";
    } else {
      emailErr = "";
    }

    if (!this.state.passwd) {
      paswdErr = "password cannot bo blank";
    } else {
      emailErr = "";
    }
    //check valid form
    if (emailErr || paswdErr) {
      this.setState({
        emailErr,
      });
      return false;
    }
    return true;
  };
  handleSubmit = (event) => {
    event.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      console.log("do something");
    }
  };

  render() {
    return (
      <div className="container">
        <h2>Login</h2>
        <form>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              name="email"
              className="form-control"
              placeholder="Enter email"
              value={this.state.email}
              onChange={this.handleChange}
            />
            <small className="form-text text-danger">
              {this.state.emailErr}
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              name="passwd"
              type="password"
              className="form-control"
              placeholder="Enter password"
              value={this.state.passwd}
              onChange={this.handleChange}
            />
            <small className="form-text text-danger">
              {this.state.passwdErr}
            </small>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}
