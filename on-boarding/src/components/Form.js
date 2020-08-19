import React from 'react'

const Form = (props) => {
    const onSubmit = () =>{

    }
    return (
        <form onSubmit={onSubmit}>
            <button>Submit</button>
            <label>Name&nbsp;
            <input
                value={values.name}
                onChange={onInputChange}
                name='name'
                type='text'
            />
            </label>

            <label>Email&nbsp;
            <input
                value={values.email}
                onChange={onInputChange}
                name='email'
                type='email'
            />
            </label>

            <label>Password&nbsp;
            <input
                value={values.password}
                onChange={onInputChange}
                name='password'
                type='text'
            />
            </label>

        </form>
    )
}

export default Form