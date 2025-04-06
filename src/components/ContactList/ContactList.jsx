import React from 'react'
import Contact from './Contact'
import s from './Contact.module.css'
const ContactList = ({contacts, handleDelete}) => {
    return (
        <ul className={s.wrapper}>
            {contacts.map((contact) =>
                <li key = {contact.id}>
                    <Contact onDelete={handleDelete} id={contact.id} name = {contact.name} number = {contact.number}/>
                </li>
            )}
        </ul>
    )
}

export default ContactList
