import React from 'react'

const User = (props) => {
    const {user} = props
    if (!user) return <div></div>
    return (
        <div>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
        </div>
    )
}

export default User