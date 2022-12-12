import React, { useEffect, useState } from 'react'
import './css/mainbody.css'
import Leftasside from './Leftasside'
import Rightasside from './Rightasside'
import axios from 'axios';
import Loader from './Loader'


function MainBody(props) {
  const [loader , setLoader] = useState(false)
  const [alldata , setAlldata] = useState();

  useEffect(() => {
    setLoader(true)
    axios.get('https://dummyjson.com/products?limit=100').then((response) => {
      setAlldata(response.data);
      setLoader(false)
    }).catch((err)=>{
          console.log(err);
    })
  }, []);




  return (
    <div className='mainbody'>
        {loader && <Loader />}
        <Leftasside alldata={alldata} prodDate={props.prodDate} setProductData={props.setProductData} setSelectedCat={props.setSelectedCat} />
        <Rightasside prodDate={props.prodDate} selectedCat={props.selectedCat} setProductData={props.setProductData}/>
    </div>
  )
}

export default MainBody