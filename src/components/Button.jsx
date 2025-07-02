import React from 'react'

const Button = ({ style, click, title = "Give Title" }) => {

    return (
        <button className={`${style}`} onClick={click}>
            {title}
        </button>
    )
}

export default Button