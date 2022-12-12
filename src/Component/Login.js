import React, { Component } from 'react'
import './css/login.css'
import login from './img/login.svg'
import SearchDetailsHeader from './SearchDetailsHeader'
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import { Link } from 'react-router-dom';


 class Login extends Component {

  
    constructor(props){
        super(props)

        this.state ={
            email : '' ,
            password : '',
            termCondition:false,
            profileLink : ''
        }
        this.onchangeHandler = this.onchangeHandler.bind(this);
        this.handelSubmit = this.handelSubmit.bind(this);
    }

    onchangeHandler(event) {
        const value = event.target.type == 'checkbox' ? event.target.checked : event.target.value ;
        this.setState({
            [event.target.name] : value
        })

        // if(event.target.name ='termCondition'){
        //     this.setState({
        //         [event.target.name] : event.target.checked
        //     })
        // }else{
        //     this.setState({
        //         [event.target.name] : event.target.value
        //     })
        // }

    }

    handelSubmit(event) {
        event.preventDefault();
        if(this.state.password !== localStorage.getItem('password')){
            alert('passwoed not match')
            console.log('error');
        }
        
        console.log('error1111');
    }
  render() {

    // function inputChangeHandler() {

    // }
    
    return (
        <>
        <SearchDetailsHeader />
        <div className='Login-main'>
            <div className='row form-Section'>
                <div className='form '>
                    <img className='usericonLogin loginsvg' src={login} alt='usericonLogin' />
                    <span className='form-heading'>Sign In</span>
                    <form className='formInput'> 
                        <div className='input-Div'>
                            <label className='inputLable'><PersonIcon sx={{fontSize:'18px'}}/> </label>
                            <input type={'email'} name='email' value={this.state.email} placeholder='Enter Email' onChange={this.onchangeHandler} /> 
                        </div>
                        <div className='input-Div'>
                            <label className='inputLable'><LockIcon sx={{fontSize:'18px'}}/> </label>
                            <input type={'password'} name='password' value={this.state.password} placeholder='Password' onChange={this.onchangeHandler} /> 
                        </div>
                        <div className="form-terms">
                          <input type="checkbox" name='termCondition' onChange={this.onchangeHandler} checked={this.state.termCondition}/>
                          <span>I agree all statements in <a href="">Terms & Conditions</a></span>
                        </div>
                        <div className="form-group">
                            <div type="submit" className="btn btn-default"><Link className='loginCss'  to={this?.state?.profileLink} > Login</Link></div>
                            <span className="form-login">Do not have an account?  <Link to={'/sign-up'}>Register Now</Link></span>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </>
    )
  }
}

export default Login







