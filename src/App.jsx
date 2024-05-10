import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [data, setData] = useState({});
  const [click,setClick] = useState(false);
 
  function handleOpen(){
    setClick(!click);
  }

  function handleChange(e){
    setData({...data,[e.target.name]:e.target.value});
    console.log(data);
  }

  function handleSubmit(e){
    e.preventDefault();
    const {email,phone,date} = data;

    let re = /^\S+@\S+\.\S+$/;
    let currentDate = new Date();
    let selectData = new Date(date);

    if(!re.test(email)){
      alert('Invalid email. Please check your email address.');
    }
    else if(phone.length!==10){
      alert('Invalid phone number. Please enter a 10-digit phone number.')
    }
    else if(selectData>currentDate){
      alert('Invalid date of birth')
    }
    else{
      setClick(false);
    }

    
  }

  return (
    <div className={click ? 'clicked' :'notclicked'}>
      <h2>User Details Modal</h2>
      <button className='button' onClick={handleOpen} >Open Form</button>
      {click ? (
        <div className='modal'>
              <form onChange={handleChange} onSubmit={handleSubmit} className='modal-content'>
                <div className='title'>Fill Details</div>
                <div className='title'>Username:</div>
                <input type='text' name='username' id='username' required/>
                <div className='title'>Email Address:</div>
                <input type='text' name='email' id='email' required/>
                <div className='title'>Phone Number:</div>
                <input type='text' name='phone' id='phone' required/>
                <div className='title'>Date of Birth:</div>
                <input type='date' name='date' id='dob' required/>   
                <button className='submit-button'>Submit</button>
            </form>
        </div>
      ):''}

    </div>
  )
}

export default App
