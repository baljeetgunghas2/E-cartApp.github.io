import React, {useState} from 'react'
import './css/Header.css'
import IconButton from '@mui/material/IconButton';
// import axios from 'axios';
import { Link } from 'react-router-dom';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PersonIcon from '@mui/icons-material/Person';
import LoginIcon from '@mui/icons-material/Login';


function SearchDetailsHeader(props) {
  const [profileDropD, setProfileDropD] = useState(false)
  function Back(){
    window.history.back()
  }

  return (
   <>   
        <div className='navMain' >
            <IconButton>
                <Link onClick={Back}>
                    <KeyboardBackspaceIcon />
                </Link>
            </IconButton>
          <Link to={'/'} className='DetailsHeaderCenter'>
            <img className='logoimg' src='https://logopond.com/avatar/43740/path4183.png' alt='logo-img' />
            <h1 className='logoHeading'>
                Bigbo
            </h1>
          </Link>
            <IconButton onClick={(pre)=> setProfileDropD(pre => !pre)}>
                <AccountCircleIcon />
            </IconButton>
            {profileDropD && <div className='profileSection'>
               {localStorage.getItem('firstName') && <Link to={'/profile'} className='linkstyl'><span className='profile-dropdown-list'><PersonIcon sx={{ fontSize: 20 }} /> View Profile </span></Link>}
               <Link to={'/login'} className='linkstyl'><span className='profile-dropdown-list'><LoginIcon sx={{ fontSize: 20 }} /> Login </span></Link>
            </div>  }
        </div>
   </>
  )
}

export default SearchDetailsHeader