import React from 'react'
import Header from '../component/Header'
import BottomNavBar from '../component/BottomNavBar'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
function SignInPage() {
  const troggle = true
  function handleChangeSignIn(event) {
    console.log({ [event.target.id]: event.target.value })
  }
  return (
    <div className='App'>
      <Header troggle={troggle} />
      <br />
      <br />
      <h2 style={{ color: 'gray' }}>Welcome to Snick & Snack</h2>
      <br />
      <br />
      <div className='signin-container'>
        <div className='signin'>
          <div>
            <h3>Sign In</h3>
          </div>
          <br />
          <div className='signin-container-input'>
            <TextField id='username' onChange={(e) => handleChangeSignIn(e)} variant='outlined' label='Username' />
            <br />
            <TextField variant='outlined' label='Password' />
          </div>
          <br />
          <Button style={{
            backgroundColor: 'pink',
            color: 'white',
            width: '220px',
          }} variant='outlined'>Sign In</Button>
        </div>

        <div className='signup'>
          <div>
            <h3>Sign Up</h3>
          </div>

          <div style={{ marginTop: '10px' }}  >
            <TextField style={{ width: '200px' }} label='Name' />
            <br />
            <TextField style={{ marginTop: '10px', width: '200px' }} label='Email' />
            <br />
            <TextField style={{ marginTop: '10px', width: '200px' }} label='Username' />
            <br />
            <TextField style={{ marginTop: '10px', width: '200px' }} label='Password' />
            <br />
            <TextField style={{ marginTop: '10px', width: '200px' }} label='Confrim password' />
            <br />
            <TextField style={{ marginTop: '10px', width: '200px' }} multiline label='Address' />
            <br />
            <br />
            <Button style={{
              backgroundColor: 'pink',
              color: 'white',
              width: '200px',
            }} variant='outlined'>Sign Up</Button>
          </div>
        </div>
      </div>
      <BottomNavBar />
    </div>
  )
}

export default SignInPage
