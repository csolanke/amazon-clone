import React ,{useState} from 'react'
import { Link ,useHistory} from 'react-router-dom'
import './Login.css'
import { auth }  from './firebase.js'


function Login() {

    const [email, setEmail]=useState('');
    const [password,setPassword]=useState('');
    const history = useHistory();

    const signIn=(e)=>{
           e.preventDefault();
           //code for firesbase auth

           auth
           .signInWithEmailAndPassword(email,password)
           .then((auth)=> {
               history.push('/');
           })
           .catch((error)=> alert(error.message));

    }

    const register=(e)=>{
          e.preventDefault();
          auth
          .createUserWithEmailAndPassword(email,password)
          .then((auth)=>{
              console.log(auth);
              if(auth)
              {
                  history.push('/');
              }
          })
          .catch(error=> alert(error.message))
    }


    return (
        <div className='login'> 
             
             <Link to ='/'>
               <img
               className='login__logo'
               src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png'
               />
             </Link>

            <div className='login__container'>
                <h1>Sign In</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e=> setEmail(e.target.value)}/>

                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e=> setPassword(e.target.value)}/>
                    
                    <button className='login__signInButton' type='submit' onClick={signIn}>
                        Sign In
                    </button>  

                </form>
                
                <p>
                By Sign-In, you agree to Amazon's clone Conditions of Use and Privacy Notice.
                </p>

                <button className='login__registerButton' onClick={register}>
                    Create your Amazon Account
                </button>
            </div>
            
        </div>
    )
}

export default Login
