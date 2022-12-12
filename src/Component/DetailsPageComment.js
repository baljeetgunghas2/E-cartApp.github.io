import React from 'react';
import './css/DetailsPageComment.css'

function DetailsPageComment() {
  return (
    <div className='detailsComment-Main'>
        <h2 className='commentRelatedHeading'>Comment Realted To This Product</h2>
        <div className='related-commentSec'>
            <div className='commentMain'>
                <div className='commentUserLOgo'>
                    <img className='Commetn-userLOgo' src='https://robohash.org/doloremquesintcorrupti.png' alt='userLogo' />
                </div>
                <div className='commentUserDetails'>
                    <h6 className='userNameComment'>Oleta Abbott </h6>
                    <p className='userComment mt10'>I can tell you’ve been paying attention !</p>
                </div>
            </div>
            <div className='commentMain'>
                <div className='commentUserLOgo'>
                    <img className='Commetn-userLOgo' src='https://robohash.org/cupiditatererumquos.png' alt='userLogo' />
                </div>
                <div className='commentUserDetails'>
                    <h6 className='userNameComment'>Ewell Mueller </h6>
                    <p className='userComment mt10'>I can tell you’ve been paying attention I can tell you’ve been paying attention I can tell you’ve been paying attention!</p>
                </div>
            </div>
            <div className='commentMain'>
                <div className='commentUserLOgo'>
                    <img className='Commetn-userLOgo' src='https://robohash.org/quiaharumsapiente.png' alt='userLogo' />
                </div>
                <div className='commentUserDetails'>
                    <h6 className='userNameComment'>Clark John </h6>
                    <p className='userComment mt10'>I can tell you’ve been paying attention I can tell you’ve been paying attention I can tell you’ve been paying attention!</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DetailsPageComment