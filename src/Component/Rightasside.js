import React, { useState } from 'react'
import './css/main.css'
import SortIcon from '@mui/icons-material/Sort';
import HeightIcon from '@mui/icons-material/Height';
import NorthIcon from '@mui/icons-material/North';
import SouthIcon from '@mui/icons-material/South';
import IconButton from '@mui/material/IconButton';
import Card from './Card.js'


function Rightasside(props) {

  const [filterDflt ,setFilterDflt] = useState(true);
  const [sorticon ,setSorticon] = useState(false);

  const filterSortHander =()=>{
    setFilterDflt(true)
  }
  const sortProductHandler =(pre)=>{
    setFilterDflt(false)
    setSorticon(pre => !pre)
    if(sorticon){
      props?.prodDate?.products.sort((a,b)=>{
          return a.price-b.price ;
      });
    }else{
      props?.prodDate?.products.sort((a,b)=>{
        return b.price-a.price ;
    });
    }

  }


  return (
    <div className='right-panel pd30'>
          {/* carsole for best offer */}

          <div className='topSecR d-flex'>
              <div className=' d-flex justify-SpaceBw flex-col'>
                <span className='resultHeading'>Result</span>
                <span className='subheading'>{props?.prodDate?.products?.length} of 100</span>
              </div>
              <div className='resultFilter d-flex'>
                  <SortIcon className='filterIconBtn' onClick={filterSortHander}/>
                { filterDflt ? <IconButton className='filterIconBtn' onClick={sortProductHandler}><HeightIcon /></IconButton>  : sorticon ? <IconButton className='filterIconBtn' onClick={sortProductHandler}><NorthIcon /> </IconButton> : <IconButton className='filterIconBtn' onClick={sortProductHandler}><SouthIcon /></IconButton> }

              </div>
          </div>
          {props.selectedCat && <div className='searchresult'> search result for {props.selectedCat} </div>}
          {props?.prodDate  ? <Card data = {props?.prodDate} setProductData={props.setProductData}/> : (<h2  style={{color:'red', marginTop:'30px',textAlign:'center'}}>Faching Data From Server...</h2>) }
      </div>
  )
}

export default Rightasside