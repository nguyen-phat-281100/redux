import React, { Component } from "react";

export default class DemoFormValidation extends Component {
  state = {
    value: {
      email: "",
      passwd: "",
    },
    errors: {
      emamil: "",
      passwd: "",
    },
    isValidEmail: false,
    isValidPassword: false,
    isFormValid: false,
  };
  handleChange = (event) => {
    const { name, value } = event.target;
    // let { isValidEmail, isValidPassword } = this.state;
    // let errMessage=''
    // console.log(name, value);
    this.setState(
      {
        value: {
          ...this.state.value,
          [name]: value,
        },
      },
      () => {
        console.log(this.state.value);
      }
    );
  };
  handleError = (event) => {
    const { name, value } = event.target;
    let { isValidEmail, isValidPassword } = this.state;

    let errMessage = "";
    //validate empty
    if (value === "") {
      errMessage = `${name} cannot bo empty`;
    }
    switch (name) {
      case "email":
        const regex = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i;
        if (value && !value.match(regex)) {
          errMessage = "invalid email";
        }
        isValidEmail = errMessage === "" ? true : false;
        break;
      case "passwd":
        if (value && (value.length < 6 || value.length > 10)) {
          errMessage = "Password should be 6 to 10 characters !";
        }
        isValidPassword = errMessage === "" ? true : false;

        break;

      default:
        break;
    }
    this.setState(
      {
        errors: {
          ...this.state.errors,
          [name]: errMessage,
        },
        isValidEmail,
        isValidPassword,
      },
      () => {
        this.validateForm();
      }
    );
  };
  validateForm = () => {
    const { isValidEmail, isValidPassword } = this.state;
    this.setState({
      isFormValid: isValidEmail && isValidPassword,
    });
  };
  handleSubmit = () => {
    if (this.state.isFormValid) {
      console.log("Submited !");
      console.log(this.state.value);
    } else {
      console.log("Loggin error");
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
              value={this.state.value.email}
              onChange={this.handleChange}
              onBlur={this.handleError}
              onKeyUp={this.handleError}
            />
            <small className="form-text text-danger">
              {this.state.errors.emailErr}
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              name="passwd"
              type="password"
              className="form-control"
              placeholder="Enter password"
              value={this.state.value.passwd}
              onChange={this.handleChange}
              onBlur={this.handleError}
              onKeyUp={this.handleError}
            />
            <small className="form-text text-danger">
              {this.state.errors.passwdErr}
            </small>
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            // disabled={!this.state.isFormValid}
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}
