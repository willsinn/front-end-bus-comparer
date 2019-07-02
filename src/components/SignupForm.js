import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setUpUser } from '../actions/user'
import { withRouter, Redirect } from 'react-router'
import { Button, Form, Segment, Message } from 'semantic-ui-react'

class SignupForm extends Component {
  state = {
    username: '',
    password: '',
    confirmPassword: '',
    error:''
  }
  handleChange = (fieldType) => {
    return (event) => {
      this.setState({
        [fieldType]: event.target.value
      })
    }
  }

  handleSubmit = () => {
    if(this.state.password !== this.state.confirmPassword) {
      this.setState({error: 'Passwords dont match'})
    } else {
      this.props.setUpUser(
        this.state.username,
        this.state.password
      );
    }
  }
  render(){
    const signupFields = [
      'username',
      'password',
      'confirmPassword'
    ];

    return this.props.loggedIn ? (
      <Redirect to="/profile" />
    ) : (
      <div className="signup-page">
        <div className="form-wrapper">
          <div className="form-box">
            <h3>Signup</h3>
            <Form
              onSubmit={this.handleSubmit}
              size="mini"
              key="mini"
              loading={this.props.authenticatingUser}
              error={this.props.failedLogin}
            >
              <Message error header={this.state.error ? this.state.error : null} />
              <Form.Group widths="equal">
                {signupFields.map((field) => {
                  return (
                    <Form.Input
                      type={field}
                      label={field}
                      placeholder={field}
                      name={field}
                      onChange={this.handleChange(field)}
                      value={this.state[field]}
                    />
                  )
                })}
              </Form.Group>
              <Button type="submit">Signup</Button>
            </Form>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({
  usersReducer: {
    authenticatingUser,
    loggedIn
  }
}) => {
  return {
    loggedIn
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setUpUser: (username, password) => dispatch(setUpUser(username, password))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm)
