import React from 'react'
import SignIn from '../../components/signin/signin.component'
import SignUp from '../../components/signup/signup.component'
import './userauth.styles.scss'

const UserAuth = () => (
  <div className="sign-in-and-sign-up">
    <SignIn />
    <SignUp />
  </div>
)

export default UserAuth
