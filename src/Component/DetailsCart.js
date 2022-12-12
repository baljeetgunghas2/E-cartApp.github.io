import React from 'react'
import './css/detailsPage.css'
import './css/DetailsCart.css'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import HttpsIcon from '@mui/icons-material/Https';

function DetailsCart({setSpacificProduct,genPries}) {
    let weekDay = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday',]
    let monthName = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let d = new Date();
    let deliveryDay = (d.getDay()) +4 ;
    let deliveryMonth = (d.getMonth());
    if(deliveryDay >= weekDay.length){
        deliveryDay = deliveryDay - weekDay.length ;
        // console.log(weekDay[deliveryDay]);
    }else{
        // console.log(weekDay[deliveryDay]);
    }
  return (
    <>
        <div className='cartMain-Sec'>
            <span className='rp-icon'> ₹ </span>
                <span className='rpAfter-Discount'>{genPries.toFixed(2)}</span>
                <div className='deliveryTime'>
                    <p>
                        <span className='freeDeliver fs-14'>FREE delivery  </span>
                        <span className='deliveryDate fs-14'> {weekDay[deliveryDay]}, {d.getDate()+4} {monthName[deliveryMonth]}. </span>
                        <span className='freeDeliver fs-14'>Details  </span>
                    </p>
                </div>
                <div className='deliveryLocation mt5'>
                    <LocationOnOutlinedIcon className='locatonIcon' />
                    Select delivery location
                </div>
                <span className='dispachDetails'>Usually dispatched in 4 to 5 days.</span>
                <div className='qualitySec mt5'>
                    Quantity : 
                    <select className='QualityList' name="selectitem" id="quantity">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select>
                </div>
                <button className='addToCartBtn mt20'>
                    Add to Cart
                </button>
                <button className='addToCartBtn buyNow mt10'>
                    Buy Now
                </button>
                <div className=' Secure-Sec mt20'>
                    <HttpsIcon className='Secureimg' />
                    <span className='secureText'>Secure transaction</span>
                </div>
                <hr className='mt10' style={{opacity: '0.3'}} />
                <div className='addToWishList buyNow mt10'>
                    Add to Wish List 
                </div>
        </div>
        <div className='mt5 sellSec'>
            <span className='fs-14'>Have one to sell?</span>
            <div className='sellOption'>Sell on Us</div>
        </div>
     </>
  )
}

export default DetailsCart