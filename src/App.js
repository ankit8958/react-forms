import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
function App() {

  // const [name,setName] = useState('');
  // const [pass,setPasswordHandle] = useState('');
  // const [fullname,setFullName] = useState('');
  // const[passowrd,setPassword] = useState('');
  // const InputEvent =(e)=>{
  //   // console.log(e.target.value);
  //   setName(e.target.value);
  // }
  // const passwordEvent=(e)=>{
  //   setPassword(e.target.value);
  // }
  // const submit = (e)=>{
  //   e.preventDefault();
  //  setFullName(name); 
  //  setPasswordHandle(passowrd);
  
  // }
  // const clear=()=>{
  //   setFullName('');
  //   setPasswordHandle('');
  //   setFullName('');
  //   setPassword('');
  //   setName('');
  // }

  const [fullname,setFullName] = useState({
    fname:'',
    lname:''
  });
  
  const InputEvent =(e)=>{
    
    setFullName((prevState)=>{

      return{

            ...prevState,
            [e.target.name]:e.target.value
      }

      // if(e.target.name === 'fname'){

      //   return {
      //     fname:e.target.value,
      //     lname:prevState.lname
      //   }
       
      // }


      // if(e.target.name === 'lname'){

      //   return {
      //     fname:prevState.fname,
      //     lname:e.target.value
      //   }
       
      // }

    })
  }
  
  const submit = (e)=>{
    e.preventDefault();
  }
  const clear=()=>{
    setFullName({
      fname:'',
      lname:''
    });
  }

  return (
        <>
          <h1>Hello{fullname.fname}{fullname.lname}</h1>
          <form onSubmit={submit}>
          <input  type="text" name="fname" placeholder="Enter you name" onChange={InputEvent} value={fullname.fname}/>
          <input  type="text" name="lname" placeholder="Enter you last name" onChange={InputEvent} value={fullname.lname}/>
          <button  type='submit'>Click Me</button>
          </form>
          <button type="button" onClick={clear}>Clear</button>
        </>
  );
}

export default App;
