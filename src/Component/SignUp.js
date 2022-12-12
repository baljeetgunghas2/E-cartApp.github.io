import React, { Component } from 'react'
import SearchDetailsHeader from './SearchDetailsHeader'
import './css/login.css'
import './css/sign-up.css'
import usericonLogin from './img/usericonLogin.png'
import { Link } from 'react-router-dom';


class SignUp extends Component {
  
    constructor(props) {
      super(props)
    
      this.state = {
            firstname :'',
            lastname :'',
            email :'',
            mobileNumber :'',
            password :'',
            confirmPassword :'',
            confirmPasswordError:'',
            passwordError:'',
            mobileError:'',
            emailError:'',
            firstnameError:'',
            lastnameError:'',
            profile:'',

        //  password condition state 
            matchPass : null,
            passwordValidate : false,
            mobileValidate : false,
            emailValidate : false,
            firstnameValidate : false,
            lastnameValidate : false,
      }
      this.onchangeHandler = this.onchangeHandler.bind(this);
      this.handelSubmit = this.handelSubmit.bind(this);
    //   this.confirmPasswordMatch = this.confirmPasswordMatch.bind(this);
      this.handlerPasswordError = this.handlerPasswordError.bind(this);
    }


    onchangeHandler(event) {
        this.setState({
            [event.target.name] : event.target.value
        })

    }

    handelSubmit(event) {
        event.preventDefault();
        console.log(JSON.stringify(this.state));
        console.log(this.state);
        
        localStorage.setItem('firstName', this.state.firstname);
        localStorage.setItem('lastname', this.state.lastname);
        localStorage.setItem('email', this.state.email);
        localStorage.setItem('mobileNumber', this.state.mobileNumber);
        localStorage.setItem('password', this.state.password);
        localStorage.setItem('profile', this.state.profile);
        this.setState({
            firstname :'',
            lastname :'',
            email :'',
            mobileNumber :'',
            password :'',
            confirmPassword :'',
            profile:'',
        })
    }

    // confirmPasswordMatch() {
    //     if(this.state.password.length < 1){
    //         this.setState({matchPass :true,confirmPasswordError :''})
    //     }else if( this.state.confirmPassword===this.state.password){
    //         this.setState({matchPass :true,confirmPasswordError :'Password successfull match.'})
    //     }else{
    //         this.setSt-webkit-centerate({matchPass :false,confirmPasswordError :'Password not match.'})

    //     }
    // }firstName

    handlerPasswordError(event) {
        const lowerCaseLetters = /[a-z]/g;
        const upperCaseLetters = /[A-Z]/g;
        const numbers = /[0-9]/g;

        if(this.state.password.length ==0){
            this.setState({passwordValidate :false,passwordError :''})
        }
        else if(this.state.password.length < 6){
            this.setState({passwordValidate :true,passwordError :'Password must be greater then 6 Charater , include atleast 1 spacial character, 1 capital letter, 1 small letter and 1 numeric letter'})
        }
        else if(!this.state.password.match(lowerCaseLetters)){
            this.setState({passwordValidate :true,passwordError :'Password must contain atleast 1 lowerCaseLetters'})
        }
        else if(!this.state.password.match(upperCaseLetters)){
            this.setState({passwordValidate :true,passwordError :'Password must contain atleast 1 upperCaseLetters'})
        }
        else if(!this.state.password.match(numbers)){
            this.setState({passwordValidate :true,passwordError :'Password must contain atleast 1 numbers'})
        }else{
            this.setState({passwordValidate :false,passwordError :''})
        }
        
        if(event.target.name =='confirmPassword'){
            if(this.state.password.length < 1){
                this.setState({matchPass :null,confirmPasswordError :''})
            }else if( this.state.confirmPassword !== this.state.password){
                this.setState({matchPass :false,confirmPasswordError :'Password not match.'})
            }else{
                this.setState({matchPass :true,confirmPasswordError :'Password match successfull.'})
            }
        }


        if(event.target.name =='mobileNumber') {
            if(this.state.mobileNumber.length < 10 || this.state.mobileNumber.length > 10 ){
                this.setState({mobileValidate :true,mobileError :'Mobile Number not Valid.'})
            }else{
                this.setState({mobileValidate :false,mobileError :''})
            }
        } 

        const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if(event.target.name == 'email') {
            console.log(this.state.email.match(validRegex))
            if(this.state.email.match(validRegex) || this.state.email.length <1 ){
                this.setState({emailValidate :false,emailError :''})
            }else{
                this.setState({emailValidate :true,emailError :'Email not Valid.'})
            }
        } 
    }
  

  render() {
    return (
      <>
        <SearchDetailsHeader onChange={this.onchangeHandler} />
        <div className='Login-main'>
            <div className='row form-Section SignUPform-Section'>
                <div className='form formSinup'>
                <img className='usericonLogin' src={usericonLogin} alt='usericonLogin' onChange={this.onchangeHandler} />
                    <span className='form-heading'>Register now</span>
                    <form className='formInput'> 
                        <div className='sign-up-input-Div'>
                            <label className='signup-inputLable'>First Name </label>
                            <input type={'text'} value={this.setState.firstname} name='firstname' onChange={this.onchangeHandler} /> 
                        </div>
                        <div className='sign-up-input-Div'>
                            <label className='signup-inputLable'>Last Name </label>
                            <input type={'text'} value={this.setState.lastname} name='lastname' onChange={this.onchangeHandler} /> 
                        </div>
                        <div className='sign-up-input-Div'>
                            <label className='signup-inputLable'>Email </label>
                            <div className='inputDivSec'>
                                <input type={'email'} value={this.setState.email} name='email' onChange={this.onchangeHandler} onKeyUp={this.handlerPasswordError}/> 
                                {this.state.emailValidate && <span className='errormsg not-match'>{this.state.emailError}</span>}
                            </div>
                        </div>
                        <div className='sign-up-input-Div'>
                            <label className='signup-inputLable'>profile </label>
                            <div className='inputDivSec'>
                                <input type={'url'} value={this.setState.profile} name='profile' onChange={this.onchangeHandler} /> 
                                {/* {this.state.emailValidate && <span className='errormsg not-match'>{this.state.emailError}</span>} */}
                            </div>
                        </div>
                        <div className='sign-up-input-Div'>
                            <label className='signup-inputLable'>Mobile Number </label>
                            <div className='inputDivSec'>
                                <input type={'number'} minLength='10' value={this.setState.mobileNumber} name='mobileNumber' onChange={this.onchangeHandler} onKeyUp={this.handlerPasswordError} /> 
                                {this.state.mobileValidate && <span className='errormsg not-match'>{this.state.mobileError}</span>}
                            </div>
                        </div>
                        <div className='sign-up-input-Div'>
                            <label className='signup-inputLable'>Password </label>
                            <div className='inputDivSec'>
                                <input type={'password'} value={this.setState.password}  name='password' onChange={this.onchangeHandler} onKeyUp={this.handlerPasswordError}/> 
                                {this.state.passwordValidate && <span className='errormsg not-match'>{this.state.passwordError}</span>}
                            </div>
                        </div>
                        <div className='sign-up-input-Div'>
                            <label className='signup-inputLable'>Confirm Password </label>
                            <div className='inputDivSec'>
                                <input  type={'password'} value={this.state.confirmPassword} name='confirmPassword' onChange={this.onchangeHandler} onKeyUp={this.handlerPasswordError} /> 
                                <span className={this?.state?.matchPass ? 'errormsg match' : 'errormsg not-match'}>{this.state.confirmPasswordError}</span>
                            </div>
                        </div>
                        <div className="form-group">
                            <Link to={'/profile'} type="submit" className="btn btn-default signupBtn" onClick={this.handelSubmit}>Create new account</Link>
                            <span className="form-login">Already Have account ? <Link to={'/login'}>Log in</Link></span>
                        </div>
                       
                    </form>
                </div>
            </div>
        </div>
        </>
    )
  }
}


export default SignUp