import React from 'react'
import { IconButton } from '@material-ui/core';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';

function Header(props) {

  const { troggle } = props

  return (
    <div className='header'>
      <img className='header-logo' src='https://scontent.fbkk2-6.fna.fbcdn.net/v/t1.6435-9/103081654_101496514943895_4902528536357904749_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeGNpkC5KGIHv0og7xMup5EepjIsVzKV7pGmMixXMpXukfFAvvxMzAMoIE3eJJneDXU&_nc_ohc=36mVfW3qJfwAX-mCzVF&_nc_ht=scontent.fbkk2-6.fna&oh=fc8039c184d666a41385a7351607a1d6&oe=60DB31DA'></img>
      <h3>Snick & Snack</h3>
      {
        troggle === false && (<div>
          <input style={{ width: '250px' }} type='text'></input>
          <IconButton color='pink' >
            <SearchOutlinedIcon style={{ fontSize: '20px', color: 'EF5DA8' }} />
          </IconButton>
        </div>)
      }
      <div className='header-navbar'>
        <a href='/' className='header-navbar-a'>Home</a>
        <a>Cart</a>
        <a href='/profile' className='header-navbar-a'>Profile</a>
        <a href='/signin/signup' className='header-navbar-a'>SignIn</a>
      </div>
    </div>
  )
}

export default Header
