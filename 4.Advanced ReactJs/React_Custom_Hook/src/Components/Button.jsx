import React from 'react'
import style from "./Button.module.css"

const Button = ({colorScheme='white',size='md',variant='solid'}) => {

  return <button className={`${style[colorScheme]} ${style[size]} ${style[variant]}`}>Button</button>
}


export default Button