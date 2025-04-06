import React from 'react'
import { Formik, Form, Field, ErrorMessage} from 'formik';
import { nanoid } from 'nanoid'
import { object, string, number } from 'yup';
import s from './ContactForm.module.css'
const ContactForm = ({onSubmit}) => {
  const nameFieldId = nanoid();
  const numberFieldId = nanoid();
  const FeedbackSchema = object({
    username: string().required('Required').min(3, 'Too Short!').max(50, 'Too Long!'),
    phone: string().required('Required').min(9, 'Too Short!').max(9, 'Too Long!'),
  });
  return (
    <Formik validationSchema={FeedbackSchema} 
    initialValues={{ username: '', phone: '' }}
    onSubmit={onSubmit}>
      <Form className={s.form}>
        <div className={s.input}>
          <label htmlFor={nameFieldId}>Name</label>
          <Field  className={s.field} type="text" name="username" id={nameFieldId}/>
          <ErrorMessage name="username" component="div" className="error" />
        </div>
        <div className={s.input}>
          <label htmlFor={numberFieldId}>Number</label>
          <Field  className={s.field} type="text" name="phone" id={numberFieldId}/>
          <ErrorMessage name="phone" component="div" className="error" />
        </div>
        <button className={s.button}>Add contact</button>
      </Form>
    </Formik>
  )
}

export default ContactForm
