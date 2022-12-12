import React from 'react'
import './css/RelatedPage.css'
import Slider from "react-slick";
import fullstar from './img/fullstar.png'
import halfrating from './img/halfrating.png'
import { Link } from 'react-router-dom'


const RelatedProdDetailspage = ({relatedProductData})=> {

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      lazyLoad: true,
      autoplay: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

    return (
      <div className='relateditem-Main'>
        <h2 className='relatedHEading'> Products related to this item</h2>
        <Slider {...settings} className='sliderRElatedProd'>
          {relatedProductData?.products?.map((prod,index)=>{
            return(
              <Link to={`/product:${prod.id}:${prod.title.toLowerCase().replace(/ /g, "-")}`} className='product-card' onClick={()=> window.scrollTo(0, 0) } key={index}> 
                <div className='sliderImageSec'>
                    <img className='sliderImg'  src={prod.thumbnail} alt='related prod' />
                    <p className='related-title'>{prod.description} </p>
                    <div className='prodDetails-Info mt5'>
                      <div className='ratingection alineCenter' >
                        <img className='staricon' src={fullstar} alt='fullstar' />
                        <img className='staricon' src={fullstar} alt='secufullstar' />
                        <img className='staricon' src={fullstar} alt='fullstar' />
                        <img className='staricon' src={fullstar} alt='fullstar' />
                        <img className='staricon' src={halfrating} alt='halfrating' />
                        <span className='ratingnumber-RelatedProd' >{prod.rating.toFixed(1)} </span>
                      </div>
                    </div>
                    <div className='relatedProd-Pries'>
                        <span className='rp-icon rpicon-relatedProd'>₹ </span>
                        <span className='rpAfter-Discount bgR'>{prod.price} </span>
                    </div>
                </div>
              </Link>
            )
          })}
          
{/* 
          <div className='sliderImageSec'>
            <img className='sliderImg'  src='https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg' alt='related prod' />
            <p className='related-title'>Aspora Women's Georgette Printed Ready To Wear Lehenga Choli Set with Dupatta</p>
              <div className='prodDetails-Info mt5'>
                <div className='ratingection alineCenter' >
                  <img className='staricon' src={fullstar} alt='fullstar' />
                  <img className='staricon' src={fullstar} alt='secufullstar' />
                  <img className='staricon' src={fullstar} alt='fullstar' />
                  <img className='staricon' src={fullstar} alt='fullstar' />
                  <img className='staricon' src={halfrating} alt='halfrating' />
                  <span className='ratingnumber-RelatedProd' >
                    4.4
                  </span>
                </div>
            </div>
            <div className='relatedProd-Pries'>
                <span className='rp-icon rpicon-relatedProd'>
                      ₹ </span>
                <span className='rpAfter-Discount bgR'>
                    5,999.00
                </span>
            </div>
          </div>
          <div className='sliderImageSec'>
            <img className='sliderImg'  src='https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg' alt='related prod' />
            <p className='related-title'>Aspora Women's Georgette Printed Ready To Wear Lehenga Choli Set with Dupatta</p>
              <div className='prodDetails-Info mt5'>
                <div className='ratingection alineCenter' >
                  <img className='staricon' src={fullstar} alt='fullstar' />
                  <img className='staricon' src={fullstar} alt='secufullstar' />
                  <img className='staricon' src={fullstar} alt='fullstar' />
                  <img className='staricon' src={fullstar} alt='fullstar' />
                  <img className='staricon' src={halfrating} alt='halfrating' />
                  <span className='ratingnumber-RelatedProd' >
                    4.4
                  </span>
                </div>
            </div>
            <div className='relatedProd-Pries'>
                <span className='rp-icon rpicon-relatedProd'>
                      ₹ </span>
                <span className='rpAfter-Discount bgR'>
                    5,999.00
                </span>
            </div>
          </div>
          <div className='sliderImageSec'>
            <img className='sliderImg'  src='https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg' alt='related prod' />
            <p className='related-title'>Aspora Women's Georgette Printed Ready To Wear Lehenga Choli Set with Dupatta</p>
              <div className='prodDetails-Info mt5'>
                <div className='ratingection alineCenter' >
                  <img className='staricon' src={fullstar} alt='fullstar' />
                  <img className='staricon' src={fullstar} alt='secufullstar' />
                  <img className='staricon' src={fullstar} alt='fullstar' />
                  <img className='staricon' src={fullstar} alt='fullstar' />
                  <img className='staricon' src={halfrating} alt='halfrating' />
                  <span className='ratingnumber-RelatedProd' >
                    4.4
                  </span>
                </div>
            </div>
            <div className='relatedProd-Pries'>
                <span className='rp-icon rpicon-relatedProd'>
                      ₹ </span>
                <span className='rpAfter-Discount bgR'>
                    5,999.00
                </span>
            </div>
          </div>
          <div className='sliderImageSec'>
            <img className='sliderImg'  src='https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg' alt='related prod' />
            <p className='related-title'>Aspora Women's Georgette Printed Ready To Wear Lehenga Choli Set with Dupatta</p>
              <div className='prodDetails-Info mt5'>
                <div className='ratingection alineCenter' >
                  <img className='staricon' src={fullstar} alt='fullstar' />
                  <img className='staricon' src={fullstar} alt='secufullstar' />
                  <img className='staricon' src={fullstar} alt='fullstar' />
                  <img className='staricon' src={fullstar} alt='fullstar' />
                  <img className='staricon' src={halfrating} alt='halfrating' />
                  <span className='ratingnumber-RelatedProd' >
                    4.4
                  </span>
                </div>
            </div>
            <div className='relatedProd-Pries'>
                <span className='rp-icon rpicon-relatedProd'>
                      ₹ </span>
                <span className='rpAfter-Discount bgR'>
                    5,999.00
                </span>
            </div>
          </div>
          <div className='sliderImageSec'>
            <img className='sliderImg'  src='https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg' alt='related prod' />
            <p className='related-title'>Aspora Women's Georgette Printed Ready To Wear Lehenga Choli Set with Dupatta</p>
              <div className='prodDetails-Info mt5'>
                <div className='ratingection alineCenter' >
                  <img className='staricon' src={fullstar} alt='fullstar' />
                  <img className='staricon' src={fullstar} alt='secufullstar' />
                  <img className='staricon' src={fullstar} alt='fullstar' />
                  <img className='staricon' src={fullstar} alt='fullstar' />
                  <img className='staricon' src={halfrating} alt='halfrating' />
                  <span className='ratingnumber-RelatedProd' >
                    4.4
                  </span>
                </div>
            </div>
            <div className='relatedProd-Pries'>
                <span className='rp-icon rpicon-relatedProd'>
                      ₹ </span>
                <span className='rpAfter-Discount bgR'>
                    5,999.00
                </span>
            </div>
          </div>
          <div className='sliderImageSec'>
            <img className='sliderImg'  src='https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg' alt='related prod' />
            <p className='related-title'>Aspora Women's Georgette Printed Ready To Wear Lehenga Choli Set with Dupatta</p>
              <div className='prodDetails-Info mt5'>
                <div className='ratingection alineCenter' >
                  <img className='staricon' src={fullstar} alt='fullstar' />
                  <img className='staricon' src={fullstar} alt='secufullstar' />
                  <img className='staricon' src={fullstar} alt='fullstar' />
                  <img className='staricon' src={fullstar} alt='fullstar' />
                  <img className='staricon' src={halfrating} alt='halfrating' />
                  <span className='ratingnumber-RelatedProd' >
                    4.4
                  </span>
                </div>
            </div>
            <div className='relatedProd-Pries'>
                <span className='rp-icon rpicon-relatedProd'>
                      ₹ </span>
                <span className='rpAfter-Discount bgR'>
                    5,999.00
                </span>
            </div>
          </div> */}
         
        </Slider>
      </div>
    );
}

export default RelatedProdDetailspage
