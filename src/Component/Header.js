import React, { useState } from 'react'
import './css/Header.css'
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import axios from 'axios';
import Loader from './Loader';
import { Link } from 'react-router-dom';



function Header(props) {
const [searchshow , setSearchshow] = useState(false);
const [searchDrop, setsearchDrop] = useState(false);
const [dropFilter, setDropFilter] = useState(null)
const [loader , setLoader] = useState(false);
const [inputVal, setinputVal] = useState('')

const itemSet = new Set();
const SearchDropdown = []; 

{props?.dropdownlist?.products?.map((item)=>{
  return itemSet.add(item.category)
})}

{itemSet.forEach( (val)=>{
  SearchDropdown.push(val)
})}

const onchangeInputHandler = (e) =>{
  const SearchText = e.target.value ;
  setDropFilter(SearchDropdown.filter((catItem)=>{
     return catItem.toLowerCase().includes(SearchText.toLowerCase()) 
    }))
  setinputVal(SearchText)
  if(!searchshow){
    setinputVal('')
  }
}

const onclikOnlist = (index) =>{
  console.log(dropFilter[index]);
  setinputVal(dropFilter[index])
  setLoader(true)
  axios.get(`https://dummyjson.com/products/category/${dropFilter[index]}`).then((response) => {
                  props.setProductData(response.data);
                  props.setSelectedCat(dropFilter[index])
                  setLoader(false)
            }).catch((err)=>{
                  console.log(err);
                  setLoader(false)
            })
  setsearchDrop(false)
}




  return (
   <>   {loader && <Loader />}
        <div className='navMain'>
          <Link to={'/'}>
            <img className='logoimg' src='https://logopond.com/avatar/43740/path4183.png' alt='logo-img' />
          </Link>
            <h1 className='logoHeading'>
                Bigbo
            </h1>

            <div className='searchInputSec'>
              {searchshow && <>
                  <input className="form-control" type="search" placeholder="search" value={inputVal} 
                  onChange={onchangeInputHandler} 
                  onKeyDown={() => {
                    setsearchDrop(true)
                  }} 
                  onBlur={()=>{
                    setTimeout(() => {
                      setsearchDrop(false)
                    }, 1000);
                  }}
                  />

                  {searchDrop &&
                      <div className='dropdownList'>
                        {(dropFilter == null ? SearchDropdown : dropFilter)?.map((item,index)=>{
                          return(
                            <li 
                              key={index} 
                              onClick={()=>onclikOnlist(index)}
                            >
                              {item}
                            </li>
                          )
                        
                        })}
                      </div>
                  }   
              </>}
              
              <IconButton  color="primary" onClick={(pre)=>{
                setSearchshow(pre => ! pre);
                setsearchDrop(false)
                }}>
                <SearchIcon />
              </IconButton>      
            </div>
            
        </div>
   </>
  )
}

export default Header