import React from 'react'
import Option from './Option'

export const Sidebar = () => {
  return (
    <div className='sb'> 
    <h1 className='h1' >Sarees</h1>
    <p className='small_Text'>Sowing 21-40 out of 10,000</p>
    <div className='filter'>
        <p>sort by</p>
    <Option>Relevance </Option>
    <Option>New Arrivals </Option>
    <Option>Price (High to Low) </Option>
    <Option>Price (Low to High)</Option>
    <Option>Ratings</Option>
    <Option>Discount</Option>
    </div>
    
    </div>
  )
}
