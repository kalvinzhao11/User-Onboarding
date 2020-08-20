import React, {useState, useEffect} from 'react';
import axios from 'axios'
import * as yup from 'yup'

import Form from './Form'
import User from './User'
import formSchema from '../validation/formSchema'

const App = () => {
  //need initial form state, reset to this after submit
  const initialForm = {
    name: '',
    email: '',
    password: '',
    tos: false,
  }

  // the current form to be submitted
  const [currentForm, setCurrentForm] = useState(initialForm)
  // data of all users
  const [users, setUsers] = useState([])
  // error message state
  const [error, setError] = useState(initialForm)

  const [disabled, setDisabled] = useState(true)


  //no initial data to load
  //axios get function
  // const getCredential = () =>{
  //   axios.get('https://reqres.in/api/users')
  //     .then(response=>{
  //       setUsers(response.data)
  //     })
  //     .catch(error => {
  //       debugger
  //     })
  // }

  // useEffect(()=>{
  //   getCredential()
  // },[])


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

  //need a update form function
  const updateForm = (name, value) => {
    yup
    .reach(formSchema, name)
    .validate(value)
    .then(() => {
      setError({
        ...error,
        [name]: "",
      })
    })
    .catch(err => {
      setError({
        ...error,
        [name]: err.errors[0],
      })
    })
    setCurrentForm({...currentForm, [name]: value})
  }

  //need a submit function
  //check credentials
  //post using an axios function
  //reset form
  const submitForm = () => {
    const appendForm = {
      name: currentForm.name.trim(),
      email: currentForm.email.trim(),
      password: currentForm.password.trim(),
      tos: currentForm.tos,
    }
    if (!appendForm.name || !appendForm.email ||!appendForm.password || !appendForm.tos) return
    postCredential(appendForm)
  }

  useEffect(() => {
    formSchema.isValid(currentForm)
      .then(valid => {
        setDisabled(!valid); 
    });
  }, [currentForm])

  return (
    <div className="App">
      <Form 
      submit={submitForm}
      update={updateForm}
      value={currentForm}
      //submit
      //update checkbox
      //update form
      //form
      error={error}
      disabled={disabled}
      //disable
      //error
      />
      {
        users.map(user =>{
          return <User user={user}/>
        })
      }
    </div>
  );
}

export default App;
