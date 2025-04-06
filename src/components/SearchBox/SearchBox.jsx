import React from 'react'
import s from './SearchBox.module.css'
const SearchBox = ({inputValue, handleChange}) => {
  

  return (
    <div className={s.wrapper}>
      <span>Find contacts by name</span>
      <input type="text" value={inputValue} onChange={handleChange}/>
    </div>
  )
}

export default SearchBox
