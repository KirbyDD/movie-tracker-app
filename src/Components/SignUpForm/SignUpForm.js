import React, { Component} from 'react';
import SignIn from '../../Containers/SignIn/SignIn';
import SignUp from '../../Containers/SignUp/SignUp';
import { connect } from 'react-redux';

class SignUpForm extends Component {
  constructor() {
    super();
    this.state = {
      signIn: false,
      signUp: false,
    }
  }

  componentDidMount() {
    const userLoggedIn = this.props.currentUser.loggedIn
    console.log(userLoggedIn )
  }

  toggleSignInAndUp = (e) => {
    const userLoggedIn = this.props.currentUser.loggedIn
    console.log(userLoggedIn )
    e.target.name === 'sign-in' ?
    this.setState({signIn: true, signUp: false}) :
    this.setState({signIn: false, signUp: true})
  }

  render() {
    
  return (
    <section>
      <div>
        <button onClick={this.toggleSignInAndUp} name="sign-in">Sign In</button>
        <button onClick={this.toggleSignInAndUp} name="sign-up">Sign Up</button>
      </div>
      {this.state.signIn && <SignIn />}
      {this.state.signUp && <SignUp />}
    </section>
  )
  }
}

const mapStateToProps = state => ({
  currentUser: state.currentUser
})


export default connect(mapStateToProps, null)(SignUpForm);
