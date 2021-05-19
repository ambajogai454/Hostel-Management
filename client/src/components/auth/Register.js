import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import classnames from "classnames";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import './Register.css';

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };

    this.props.registerUser(newUser, this.props.history);
  }

  render() {
    const { errors } = this.state;

    return (
      <div className="containercon">
        <div className="wrapper animated bounceInLeft">
        
        <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous"/>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.css" />

          <div className="form-signup-heading">
          <h3>Sign Up</h3>
           <hr/>
           
              <form id="form-signup" noValidate onSubmit={this.onSubmit}>
              
                <div className="form-group">
                <label>Name</label>
                  <input type="text" id="inp" className={classnames("form-control ", { "is-invalid": errors.name })} 
                    placeholder="User Name" name="name" value={this.state.name} onChange={this.onChange}/>
                  {errors.name && (<div className="invalid-feedback">{errors.name}</div>)}
                </div>

                <div className="form-group ">
                <label>Email Address</label>
                  <input
                    type="email" id="inp"
                    className={classnames("form-control ", {
                      "is-invalid": errors.email
                    })}
                    placeholder="Email Address"
                    name="email" id="inp"
                    value={this.state.email}
                    onChange={this.onChange}
                  />
                  {errors.email && (
                    <div className="invalid-feedback">{errors.email}</div>
                  )}
                </div>


                <div className="form-group">
                <label>Create password</label>
                  <input
                    type="password" id="inp"
                    className={classnames("form-control ", {
                      "is-invalid": errors.password
                    })}
                    placeholder="Password"
                    name="password"
                    value={this.state.password}
                    onChange={this.onChange}
                  />
                  {errors.password && (
                    <div className="invalid-feedback">{errors.password}</div>
                  )}
                </div>


                <div className="form-group">
                <label>Confirm Password</label>
                  <input
                    type="password" id="inp"
                    className={classnames("form-control ", {
                      "is-invalid": errors.password2
                    })}
                    placeholder="Confirm Password"
                    name="password2"
                    value={this.state.password2}
                    onChange={this.onChange}
                  />
                  {errors.password && (
                    <div className="invalid-feedback">{errors.password2}</div>
                  )}
                </div>
                <br/>
                <div className="form-group">
                <input type="submit" id="inp" className="btn btn-primary" />

                </div>
                              
              </form>
            </div>
          </div>
          </div>  
    );
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStatesToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStatesToProps,
  { registerUser }
)(withRouter(Register));
