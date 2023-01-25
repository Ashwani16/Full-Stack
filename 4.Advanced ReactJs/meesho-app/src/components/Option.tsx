import React from 'react'
type OptionProps={
    children:string
}
const Option = ({children}:OptionProps) => {
  return (
    <button className='option'>{children}</button>
  )
}
export default Option