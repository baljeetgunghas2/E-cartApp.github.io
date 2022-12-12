import React, { useEffect , useState } from 'react';
import './css/detailsPage.css'
import SearchDetailsHeader from './SearchDetailsHeader'
import fullstar from './img/fullstar.png'
import halfrating from './img/halfrating.png'
import DetailsCart from './DetailsCart';
import RelatedProdDetailspage from './RelatedProd-Detailspage';
import DetailsPageComment from './DetailsPageComment';
import { useParams } from "react-router-dom";
import axios from 'axios';
import LineWaveLoader from './LineWaveLoader';
import { Skeleton } from '@mui/material'

function DetailsPage() {
    const [spacificProduct, setSpacificProduct] = useState()
    const [relatedProductData, setRelatedProductData] = useState()
    const [thumbImageIcon, setThumbImageIcon] = useState()
    const [thumbImageIconActive, setThumbImageIconActive] = useState(false)
    const [thumbImage, setThumbImage] = useState()
    const [loader, setloader] = useState(false)
    const [prodID, setProdID] = useState()
    const [imageSkeleton, setImageSkeleton] = useState(true)

    const params = useParams();
    useEffect(()=>{
        // split prodID form url 
        const url = params.id;
        const re = /\s*(?::|$)\s*/;
        const nameList = url.split(re);
        const uniqeid = nameList[1]; 
        setProdID(uniqeid);
    })


    
    useEffect(() => {
        setloader(true)
        if(prodID){
            axios.get(`https://dummyjson.com/products/${prodID}`)
            .then((response) => {
            setSpacificProduct(response.data);
            setThumbImageIcon(response.data.images);
            setThumbImage(response.data.images[0]);
                axios.get(`https://dummyjson.com/products/category/${response?.data?.category}`)
                .then((res) => {
                    setRelatedProductData(res.data);
                    setloader(false)
                }).catch((err)=>{
                        console.log(err);
                        setloader(false)
                })
            }).catch((err)=>{
                console.log(err);
                // setloader(false)
            })
        }

    },[prodID])


    const genPries= spacificProduct?.price + (spacificProduct?.price*spacificProduct?.discountPercentage/100)





  return (
    <>  
        {loader && <LineWaveLoader />}
        <SearchDetailsHeader />
        <div className='Details-main'>
            <div className='Details-mainPart'>
               <div className='image-and-DetailsSec'>
                    <div className='ImageSec'>
                        <div className='thumbImgaeSec'>
                            {imageSkeleton &&  
                                <Skeleton sx={{bgcolor:'gray.900'}}
                                    variant='rectangular'
                                    width='84%'
                                    height={300}
                                    style={{position: 'absolute',
                                        zIndex: '34'}}/>
                            }
                            <img className='ThumbImage' src={thumbImage} alt='prod-thumb'  onLoad={() => setImageSkeleton(false)}/>
                        </div>
                        <div className='small-thumbImageSec'>
                            { thumbImageIcon && thumbImageIcon.map((image , index)=>{
                                return(
                                    <img key={index} className={ thumbImageIconActive ? 'SmallThumbImage active' : 'SmallThumbImage'}  src={image} alt={spacificProduct.title}
                                        onClick={()=> { 
                                            setThumbImage(thumbImageIcon[index]);
                                            setThumbImageIconActive(true) 
                                        }}
                                    />
                                )
                            })}
                        </div>
                    </div>
                    <div className='Prod-Details-Sec'>
                        <div className='Prod-Details-Left-Sec'>
                            <h1>{spacificProduct?.title}</h1>
                            <p className='prodDetailsP mt5'>{spacificProduct?.description} </p>
                            <div className='prodDetails-Info mt5'>
                                <p>Rating</p>
                                <div className='ratingection' >
                                  <img className='staricon' src={fullstar} alt='fullstar' />
                                  <img className='staricon' src={fullstar} alt='secufullstar' />
                                  <img className='staricon' src={fullstar} alt='fullstar' />
                                  <img className='staricon' src={fullstar} alt='fullstar' />
                                  <img className='staricon' src={halfrating} alt='halfrating' />
                                  <span className='ratingnumber' >
                                    {spacificProduct?.rating.toFixed(1)}
                                  </span>
                            </div>
                            </div>
                            <hr className='hr-opa' />
                            <div className='prodDetails-Dis-Info mt5'>
                                <span className='discount-per'>{spacificProduct?.discountPercentage} % </span>
                                <span className='rp-icon'>₹</span>
                                <span className='rpAfter-Discount'>{spacificProduct?.price} </span>
                                <p className='priceBefore-discount mt5'>M.R.P.:<span className='priceBefore'>{genPries.toFixed(2)} </span></p>
                                <p className='alltex mt5'>Inclusive of all taxes</p>
                                <p className='alltex mt5'> <span className='EMI'>EMI</span> starts at ₹{(genPries.toFixed(2) - spacificProduct?.price).toFixed(1)}. No Cost EMI available </p>
                                <div className='diliverySec mt5'>
                                    <div className='returnSec'>
                                        <img className='returnSec-img' src='https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-returns._CB484059092_.png' alt='return and Delivery type' />
                                        <p className='returnPolcy'> 30 days Return & Exchange </p>
                                    </div>
                                    <div className='returnSec'>
                                        <img className='returnSec-img' src='https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-amazon-delivered._CB485933725_.png' alt='return and Delivery type' />
                                        <p className='returnPolcy'> Free <br /> Delivered </p>
                                    </div>
                                </div>
                                
                            </div>

                        </div>

                        <div className='Prod-Details-Right-Sec'>
                            <DetailsCart setSpacificProduct = {setSpacificProduct} genPries={genPries} />
                        </div>
                    </div>
               </div> 
               <hr className='mt20 hrWidth' style={{opacity: '0.3', width: '75%'}} />
               <RelatedProdDetailspage relatedProductData={relatedProductData} />
               <hr className='mt20 hrWidth' style={{opacity: '0.3', width: '75%'}} />
               {/* <br /> */}
               <DetailsPageComment />
            </div>
        </div>
    </>
  )
}

export default DetailsPage