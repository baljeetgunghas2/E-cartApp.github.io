import React, { useState } from 'react'
import './css/main.css'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import axios from 'axios';
import Loader from './Loader';
import upArrow from './img/up-arrow-upload-svgrepo-com.svg'


function Leftasside(props) {
  const [dropdownShow , setDropdownshow] = useState(true);
  const [loader , setLoader] = useState(false);
  const [acctiveFillterList , setAcctiveFillterList] = useState();
  const [scrollh , setScrollh] = useState(0);

  const itemSet = new Set();
  const arrayofCAt = []; 

  setInterval(() => {
      setScrollh(window.scrollY);
}, 1000);


  {props?.alldata?.products.map((item)=>{
     return itemSet.add(item.category)
  })}

 {itemSet.forEach( (val)=>{
      arrayofCAt.push(val)
})} 

  const HandelfilterDropdown =()=>{
    setDropdownshow(pre=> !pre);
  }

  const sortBycatHandler =(val)=>{
      setLoader(true);
      // props.setSelectedCat(val)
            axios.get(`https://dummyjson.com/products/category/${val}`).then((response) => {
                  setAcctiveFillterList(val);
                  props.setProductData(response.data);
                  props.setSelectedCat(val)
                  setLoader(false)
            }).catch((err)=>{
                  console.log(err);
                  setLoader(false)
            })
            
  }


  return (
      <>
       {loader && <Loader />}
            <div className='left-panel pd30' id='leftpanale'>
                  <div className='filter-main d-flex justify-SpaceBw'>
                        <h2 className='filter-Heading'>Pick filter</h2>
                        <div className='d-flex filter-right' onClick={HandelfilterDropdown}>
                        <span className='popular-filter bg-danger'>
                        Popular
                        </span>
                              < ArrowForwardIosIcon className={dropdownShow ? 'filterArrowForward' : 'filterArrowForwardrotate'} sx={{ fontSize: 20 }}/>
                        </div>
                  </div>
                  {dropdownShow &&
                  <div className='filter-listSection d-flex'>
                              {arrayofCAt.map((val,key)=>{
                                    return (<span className={acctiveFillterList ===val ? 'filter-list Acctivefilter-list':'filter-list' }key={key} onClick={(e)=>sortBycatHandler(val)}> {val}</span>)
                              })}
                                          
                  </div>
                  }
            </div>
            {scrollh >154 &&
                  <img className='uparrowtop' src={upArrow} onClick={()=>{window.scrollTo({
                        top: 0,
                        behavior: 'smooth'})}}  alt='uparrowTop' />
            }
      </>
  )
}

export default Leftasside