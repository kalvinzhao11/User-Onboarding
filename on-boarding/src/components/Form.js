import React from 'react'

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
        <form onSubmit={onSubmit}>
            <button onSubmit={onsubmit} disabled={disabled}>Submit</button>
            <label>Name&nbsp;
            <input
                value={value.name}
                onChange={onInputChange}
                name='name'
                type='text'
            />
            </label>
            <div>{error.name}</div>

            <label>Email&nbsp;
            <input
                value={value.email}
                onChange={onInputChange}
                name='email'
                type='email'
            />
            </label>
            {error.email}

            <label>Password&nbsp;
            <input
                value={value.password}
                onChange={onInputChange}
                name='password'
                type='text'
            />
            </label>
            {error.password}

        <label>Terms of service&nbsp;
        <input 
            type='checkbox'
            name='tos'
            checked={value.tos}
            onChange={onTextChange}
          />
        </label>
        {error.tos}

        </form>
    )
}

export default Form