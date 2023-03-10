import { useState } from 'react';
import { AuthConsumer } from "../../providers/AuthProvider";

const Register = ({ handleRegister }) => {
  const [user, setUser] = useState({ email: '', fname: '', lname: '', phone: '', password: '', passwordConfirmation: '' }) 

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.password === user.passwordConfirmation) {
      handleRegister(user);
     } else {
      alert('Passwords Do Not Match!')
     }
  }
  
  return (
    <>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input
          type="email"
          required
          autoFocus
          name='email'
          value={user.email}
          placeholder='Email'
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <label>First Name</label>
        <input
          required
          name='fname'
          value={user.fname}
          onChange={(e) => setUser({ ...user, fname: e.target.value })}
        />
        <label>Last Name</label>
        <input
          required
          name='lname'
          value={user.lname}
          onChange={(e) => setUser({ ...user, lname: e.target.value })}
        />
        <label>phone</label>
        <input
          type='number'
          required
          name='phone'
          value={user.phone}
          onChange={(e) => setUser({ ...user, phone: e.target.value })}
        />
        <label>Password</label>
        <input
          required
          name='password'
          value={user.password}
          placeholder='Password'
          type='password'
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
        <label>Password Confirmation</label>
        <input
          required
          name='passwordConfirmation'
          value={user.passwordConfirmation}
          placeholder='Password Confirmation'
          type='password'
          onChange={(e) => setUser({ ...user, passwordConfirmation: e.target.value })}
        />
        <button type='submit'>Submit</button>
      </form>
    </>
  )
}

const ConnectedRegister = (props) => (
  <AuthConsumer>
    { value => <Register { ...props } {...value} /> }
  </AuthConsumer>
)

export default ConnectedRegister;