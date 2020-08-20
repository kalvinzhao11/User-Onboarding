import React from 'react'
import styled from 'styled-components'

const Error = styled.div`
    color: red;
`

const Forms = styled.form`
    display: flex;
    align-items: center;
    flex-direction: column;

`

const Form = (props) => {
    const {submit, update, value, error, disabled} = props
    const onSubmit = (evt) =>{
        evt.preventDefault()
        submit()
    }
    const onInputChange = (evt) =>{
        const {name, value } = evt.target
        update(name, value)
    }

    const onTextChange = (evt) =>{
        const {name, checked} = evt.target
        update(name, checked)
    }
    return (
        <Forms onSubmit={onSubmit}>
            <label>Name&nbsp;
            <input
                value={value.name}
                onChange={onInputChange}
                name='name'
                type='text'
            />
            </label>
            <Error>{error.name}</Error>

            <label>Email&nbsp;
            <input
                value={value.email}
                onChange={onInputChange}
                name='email'
                type='email'
            />
            </label>
            <Error>{error.email}</Error>

            <label>Password&nbsp;
            <input
                value={value.password}
                onChange={onInputChange}
                name='password'
                type='text'
            />
            </label>
            <Error>{error.password}</Error>

        <label>Role:&nbsp;
            <select 
                value={value.role}
                onChange={onInputChange}
                name="role"
                >
                <option value="">Select Role</option>
                <option value="ui_ux">UI/ UX</option>
                <option value="front_end">Front End</option>
                <option value="backend">Backend</option>
                <option value="ios">IOS</option>
                <option value="data_science">Data Science</option>
            </select>
        </label>

        <label>Terms of service&nbsp;
        <input 
            type='checkbox'
            name='tos'
            checked={value.tos}
            onChange={onTextChange}
          />
        </label>
        <Error>{error.tos}</Error>

        <button onSubmit={onsubmit} disabled={disabled}>Submit</button>
        </Forms>
    )
}

export default Form