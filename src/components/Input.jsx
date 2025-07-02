import React from 'react'

const Input = ({ text, style, holder, value, change }) => {
    return (
        <input className={`${style}`} type={text} placeholder={holder} value={value} onChange={change} />
    )
}

export default Input