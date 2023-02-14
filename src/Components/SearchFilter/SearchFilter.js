import React from 'react'
import './SearchFilter.css'

export default function SearchFilter() {
  return (
    <div className="input-box">
        {/* <i className="fa fa-search"></i> */}
        <input type="text" placeholder='What you are looking for?' />
        <button className="button">Search</button>
    </div>
  )
}
