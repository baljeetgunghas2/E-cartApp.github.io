import React, { useState } from 'react'
import './css/main.css'
import fullstar from './img/fullstar.png'
import halfrating from './img/halfrating.png'
import yellowRight from './img/yellowRight.png'
import axios from 'axios'
// import Loader from './Loader'
import { Link } from 'react-router-dom'
import { Skeleton } from '@mui/material'




function Card(props) {
  // const [loader , setLoader] = useState(false);
  const [imageSkeleton, setImageSkeleton] = useState(true)
  const count = props?.data?.products?.length +10;


  const loadmoreHandler =()=>{
    // setLoader(true);
    axios.get(`https://dummyjson.com/products?limit=${count}`).then((response) => {
      props.setProductData(response.data);
      // console.log(response.data);
      // setLoader(false);
    }).catch((err)=>{
          console.log(err);
      })
  }
  


  // console.log(props?.data?.products?.length);

  return (
          <>
              {/* { loader && <Loader />} */}

            <div className='cardListSen'  >
              {props?.data?.products?.map((item,index)=>{
                const genPries= item.price + (item.price*item.discountPercentage/100)
                return(
                <Link to={`/product:${item.id}:${item.title.toLowerCase().replace(/ /g, "-")}`} className='product-card' onClick={()=> window.scrollTo(0, 0) } key={index}> 
                  <div className='cardSection'>
                          <div className='cardImgSec'>
                            {imageSkeleton &&  
                                  <Skeleton sx={{bgcolor:'gray.900'}}
                                        variant='rectangular'
                                        animation="wave"
                                        width='93%'
                                        height={220}
                                        style={{position: 'absolute', zIndex: '34'}}
                                        />
                                }
                              <img src={item.thumbnail} alt='prod-img' className='product-thumb' onLoad={() => setImageSkeleton(false)} />
                          </div>
                          <div className='cardD'>
                            <span className='cardHeading' >{item.title} </span>
                            <span className='cardDiscription' >{item.description} </span>
                            <div className='ratingection' >
                                  <img className='staricon' src={fullstar} alt='fullstar' />
                                  <img className='staricon' src={fullstar} alt='fullstar' />
                                  <img className='staricon' src={fullstar} alt='fullstar' />
                                  <img className='staricon' src={fullstar} alt='fullstar' />
                                  <img className='staricon' src={halfrating} alt='halfrating' />
                                  <span className='ratingnumber' >
                                    {item.rating} rating
                                  </span>
                            </div>
                            <div className='priceSection d-flex ' >
                              <div className='afterDiscount'>
                                <span className='rsiconAfterdiscount'>₹</span> 
                                <span className='priceAfterdiscount'>{item.price} </span>
                              </div>
                              <div className='beforeDiscount'>
                                <span className='priceBeforediscount'>₹ {genPries.toFixed(2)} </span>
                                <span className='discountPer'>({item.discountPercentage}% off )</span>
                              </div>
                            </div>
                            <div className='primeDeal d-flex ' >
                              <img className='primeimgIcon' src={yellowRight} alt='img-prime' />
                              prime
                            </div>
                            <div className='delivery d-flex ' >
                              <span style={{textTransform : 'uppercase',fontSize: '15px'}}>free </span> delivery
                            </div>
                          </div>
                  </div>
                </Link>
                )
              })}
            </div>

            <div className='loadMoreButtonSec'>
                <div className='loadMoreButton' onClick={loadmoreHandler} >
                    load more
                </div>
            </div>
          </>
  )
}

export default Card