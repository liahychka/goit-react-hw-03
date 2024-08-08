import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from "yup";
import css from "./ContactForm.module.css"


const ProfileValidationSchema = Yup.object().shape({
  username: Yup.string().required("Name is required").min(3, "Name must be at least 3 characters").max(50, "Name can't exceed 50 characters"),
  tel: Yup.string().required("Number is required").min(3, "Number must be at least 3 characters").max(50, "Number can't exceed 50 characters"),
});

const ContactForm = ({ onAddProfile }) => {
  
      const handleSubmit = (values, { resetForm }) => {
      onAddProfile({
        id: Date.now(),
        name: values.username,
        number: values.tel,
      });
      resetForm();
    };
    
  return (
      <Formik initialValues={{
        username: "",
        tel: ""
    }} onSubmit={handleSubmit}
    validationSchema={ProfileValidationSchema}>
      <Form className={css.tagForm}>
              <label className={css.capitalForm1}>
                  <span>Name</span>
                  <Field type="text" name="username" />     
              </label>
              <label className={css.capitalForm2}>
                <span>Number</span>
               <Field type="tel" name="tel"/>   
              </label>
			<button type="submit" className={css.btnAdd} >Add contact</button>
		</Form>
    </Formik>
  );
};


export default ContactForm;