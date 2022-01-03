import React, { Component } from "react";

export default class SignUp extends Component {
    render() {
        return (
            <form class="form-group col-md-6 ">
                <h3>Sign Up</h3>

                <div className="form-group mb-3">
                    <label>First name</label>
                    <input type="text" className="form-control" placeholder="First name" />
                </div>

                <div className="form-group mb-3">
                    <label>Last name</label>
                    <input type="text" className="form-control" placeholder="Last name" />
                </div>

                <div className="form-group mb-3">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group mb-3">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <button type="submit" className="btn btn-primary btn-block mb-3">Sign Up</button>
                <p className="forgot-password text-right mb-3">
                    Already registered <a href=" #">sign in?</a>
                </p>
            </form>
        );
    }
}