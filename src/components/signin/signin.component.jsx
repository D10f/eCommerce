import React from 'react'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'

import { auth, signInWithGoogle } from '../../firebase/firebase.utils.js'

import './signin.styles.scss'

class SignIn extends React.Component{
  constructor(props){
    super()

    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    const { email, password } = this.state

    try {
      await auth.signInWithEmailAndPassword(email, password)
      this.setState({ email: '', password: ''})

    } catch (e) {
      console.log(e.message)
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target

    this.setState({ [name]: value })
  }

  render(){
    return (
      <div className="sign-in">
        <h2 className="title">I already have an account</h2>
        <span className="subtitle">Sign in with you email and password</span>

        <form className="sign-in-form" onSubmit={this.handleSubmit}>
          <FormInput label="email" type="email" name="email" value={this.state.email} required handleChange={this.handleChange} />
          <FormInput label="password" type="password" name="password" value={this.state.password} required handleChange={this.handleChange} />

          <div className="buttons">
            <CustomButton type="submit">Sign In</CustomButton>
            <CustomButton type="button" onClick={signInWithGoogle} isGoogleSignIn>Sign In With Google</CustomButton>
          </div>
        </form>
      </div>
    )
  }
}

export default SignIn
