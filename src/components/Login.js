import React, { Component } from 'react'
import './Login.css';
import { Link } from "react-router-dom";


export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      password: "",
      loginStatus: false
    };  
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onLogin(e) {
    const history = this.props.history;

    let user = {
      UserName: this.state.userName,
      Password: this.state.password
    };

    console.log(user);
    history.push("/dashboard");
    // this.service
    //   .isAuthenticate(user)
    //   .then(res => res.json())
    //   .then(resp => {
    //     if (resp.status === 401) {
    //       this.setState({ loginStatus: true });
    //     } 
    //     else {
    //       localStorage.setItem("token", resp.token);
    //       history.push("/admin-dashboard");
    //     }
    //   })
    //   .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="container bg-light login login">
        <div className=" row  justify-content-center align-items-center">
          <div className="col-md-7">
            <h1 className="text-center">Login Page</h1>
            <hr />
            { this.state.loginStatus && (
              <span className="alert alert-danger col-md-12 row align-items-center" role="alert">
                Please Enter correct Username and Password
              </span>
            )}
            <form>
              <div className="form-group">
                <label htmlFor="userName">User Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="userName"
                  name="userName"
                  value={this.state.userName}
                  onChange={this.onChange.bind(this)}
                  placeholder="user name"
                  autoComplete="off"
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  value={this.state.password}
                  onChange={this.onChange.bind(this)}
                  placeholder="*****************"
                  autoComplete="off"
                />
              </div>
              <button
                type="button"
                className="btn btn-success"
                onClick={this.onLogin.bind(this)}
              >
                Login
              </button>
            </form>
            <div>
              <Link className="nav-link" to="/register">
                You don't have account? Register
              </Link>
            </div>
            
          </div>
        </div>
      </div>
    )
  }
}
