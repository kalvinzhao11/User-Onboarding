import React, {useState} from 'react';
import axios from 'axios'
import yup from 'yup'

import Form from './Form'


const App = () => {
  //need initial form state, reset to this after submit
  const initialForm = {
    name: '',
    email: '',
    password: '',
    tos: false,
  }


  const [currentForm, setCurrentForm] = useState(initialForm)
  const [users, setUsers] = useState([])
  //axios get function
  const getCredential = () =>{
    axios.get('https://reqres.in/api/users')
      .then(response=>{
        
      })
      .catch(error => {
        debugger
      })
  }

  //axios post function
  const postCredential = pc => {
    axios.post('https://reqres.in/api/users', pc)
      .then(response =>{
        setUsers(users.concat(response.data)) //maybe change form to only current logged in user
      })
      .catch(error => {
        debugger
      })
      .finally(()=>{
        setCurrentForm(initialForm)
      })
  }

  //need a submit function
  //check credentials
  //post using an axios function
  //reset form
  const submitForm = () => {
    const appendForm = {
      name: currentForm.name,
      email: currentForm.email,
      password: currentForm.password,
      tos: currentForm.tos,
    }
    if (!appendForm.name || !appendForm.email ||!appendForm.password || !appendForm.tos) return
    postCredential(appendForm)
  }

  //need a update form function

  //need a state for current form, 

  return (
    <div className="App">
      <Form />
    </div>
  );
}

export default App;
