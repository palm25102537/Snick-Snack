import React from 'react'
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import PersonIcon from '@material-ui/icons/Person';
import HomeIcon from '@material-ui/icons/Home';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useHistory } from 'react-router-dom'
function BottomNavBar() {
  const token = false
  const history = useHistory()
  function handleBottomNav(event) {
    const { innerText } = event.target
    if (innerText === 'Home') {
      return history.push('/')
    } else {
      return history.push(`/${innerText?.toLowerCase()}`)
    }
  }
  return (
    <div style={{ marginTop: '50px' }}>
      <BottomNavigation showLabels style={{ width: '100%' }}
        onChange={(e) => handleBottomNav(e)}
      >
        <BottomNavigationAction className='button-nav-out-home' label="Home" icon={<HomeIcon />} />
        <BottomNavigationAction className='button-nav-in' label="Cart" icon={<ShoppingCartIcon />} />
        <BottomNavigationAction className='button-nav-in' label="Profile" icon={<PersonIcon />} />
        <BottomNavigationAction className='button-nav-out-sign' label={token ? 'SignOut' : 'SignIn/SignUp'} icon={token ? <AccountCircleIcon /> : <PersonAddIcon />} />
      </BottomNavigation>
    </div >
  )
}

export default BottomNavBar
