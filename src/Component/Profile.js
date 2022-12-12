import React from 'react'
import SearchDetailsHeader from './SearchDetailsHeader'
import './css/profile.css'

function Profile() {
  return (
    <>
        <SearchDetailsHeader />
            <div className='profile-main'>
                <div className='profile-div'><img src={localStorage.getItem('profile' )} /> </div>
                <h1>{localStorage.getItem('firstName' )} {localStorage.getItem('lastname')}</h1>
                <h1>{localStorage.getItem('email')}</h1>
                <h1>{localStorage.getItem('mobileNumber')}</h1>
            </div>
    </>
  )
}

export default Profile