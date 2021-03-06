import React, { Component} from 'react';
import SignIn from '../../Containers/SignIn/SignIn';
import SignUp from '../../Containers/SignUp/SignUp';
import { connect } from 'react-redux';
import './signupform.css'


export class SignUpForm extends Component {
  constructor() {
    super();
    this.state = {
      signIn: true,
      signUp: false,
    }
  }


  toggleSignInAndUp = (e) => {
    e.target.name === 'sign-in' ?
    this.setState({signIn: true, signUp: false}) :
    this.setState({signIn: false, signUp: true})
  }

  render() {
    return (
        <section>
            {!this.state.signIn && <button className="switch-to-signup-btn" onClick={this.toggleSignInAndUp} name="sign-in">Sign In</button>}
            {!this.state.signUp && <button className="switch-to-signup-btn" onClick={this.toggleSignInAndUp} name="sign-up">Sign Up</button>}

          {this.state.signIn && <SignIn />}
          {this.state.signUp && <SignUp />}
        </section>

      )
  }
}

export const mapStateToProps = state => ({
  currentUser: state.currentUser
})


export default connect(mapStateToProps, null)(SignUpForm);
