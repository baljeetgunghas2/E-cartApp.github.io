import React from 'react'
import { ColorRing } from 'react-loader-spinner'
import './css/main.css'



function Loader() {
  return (
        <>
            <div className='overlay' ></div>
            <div className='loader'>
                <ColorRing
                    visible={true}
                    height="80"
                    width="80"
                    ariaLabel="blocks-loading"
                    // wrapperStyle={{}}
                    wrapperClass="blocks-wrapper"
                    colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
                    className='loader'
                    />
            </div>
        </>
  )
}

export default Loader