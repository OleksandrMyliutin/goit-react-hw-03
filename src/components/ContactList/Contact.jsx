import React from 'react'
import { IoPerson } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import s from './Contact.module.css'
const Contact = ({id, name, number, onDelete}) => {
  return (
    <div className={s.wrapperBox}>
      <div className={s.contacts}>
        <ul className={s.contact}>
          <li><IoPerson /></li>
          <li>{name}</li>
        </ul>
        <ul className={s.contact}>
          <li><FaPhoneAlt /></li>
          <li>{number}</li>
        </ul>
      </div>
      <button onClick={() => {onDelete(id)}} className={s.button}>Delete</button>
    </div>
  )
}

export default Contact
