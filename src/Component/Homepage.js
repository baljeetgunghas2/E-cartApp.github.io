import React, { useState ,useEffect} from 'react'
import Header from './Header'
import MainBody from './MainBody'
import axios from 'axios';

function Homepage() {
  const [prodDate , setProductData] = useState();
  const [selectedCat,setSelectedCat] = useState();
  const [dropdownlist , setDropdownlist] = useState();

  useEffect(() => {
    axios.get('https://dummyjson.com/products?limit=100').then((response) => {
      setDropdownlist(response.data);
    }).catch((err)=>{
          console.log(err);
    })

    axios.get('https://dummyjson.com/products?limit=75').then((response) => {
      setProductData(response.data);
    }).catch((err)=>{
          console.log(err);
    })

    

    // axios.get('https://fakestoreapi.com/products').then((response) => {
    //   setProductData(response.data);
    //   console.log(response.data);
    // }).catch((err)=>{
    //       console.log(err);
    // })


    // axios.get('https://fakestoreapi.com/products').then((response) => {
    //     setProductData(...prodDate ,response.data);
    //     console.log(response.data);
    //   }).catch((err)=>{
    //         console.log(err);
    //   })

  }, []);


  return (
          <div>
            <Header dropdownlist={dropdownlist} prodDate={prodDate} setProductData={setProductData} setSelectedCat={setSelectedCat} />
            <MainBody selectedCat={selectedCat} setSelectedCat={setSelectedCat} prodDate={prodDate} setProductData={setProductData}/>
          </div>

  )
}

export default Homepage