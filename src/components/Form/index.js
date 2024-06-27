'use client'

import React, { useState } from 'react'
import Styles from './Form.module.css'
import Modal from '../Modal'
const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    message: ""
  })
  const [errorMsg, setErrorMsg] = useState({
    nameErr: "",
    emailErr: "",
    phoneNumberErr: "",
  });

  const [modalStatus, setModalStatus] = useState(false)

  const validateForm = () => {
    const errorObj = {}
    if (formData.name === "") {
      errorObj.nameErr = "*Name is Required"
    }
    else if (!/^[a-zA-Z\s]+$/.test(formData.name)) {
      errorObj.nameErr = '*Name Should be alphabet';
    }
    if (formData.email === "") {
      errorObj.emailErr = "*Email is Required"
    }
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errorObj.emailErr = '*Email is invalid';
    }
    if (formData.phoneNumber == "") {
      errorObj.phoneNumberErr = "*Phone Number is Required"
    }
    else if (!/^\d{10}$/.test(formData.phoneNumber)) {
      errorObj.phoneNumberErr = '*Phone number is invalid';
    }
    // else {
    //   errorObj.nameErr = ""
    //   errorObj.emailErr = ""
    //   errorObj.phoneNumberErr = ""

    // }

    return errorObj
  }

  // const onBlurHandler=(e)=>{
  //   const { name } = e.target;
  //   const validationErrors = validateForm();
  //   setErrorMsg((prevErrors) => ({
  //     ...prevErrors,
  //     [name]: validationErrors[name],
  //   }));
  // }

  const formSubmit = (e) => {
    e.preventDefault();
    const validationObj = validateForm()
    const errorValuesCount = Object.keys(validationObj).length

    if (errorValuesCount > 0) {
      console.log("coming")
      setErrorMsg(validationObj)
    }
    else {
      console.log(formData)
      setErrorMsg({
        nameErr: "",
        emailErr: "",
        phoneNumberErr: "",
      })
      setModalStatus(true)

    }

  }


  return (
    <>
      <form className={Styles.form} style={{ opacity: modalStatus ? 0.5 : 1 }} onSubmit={formSubmit}>
        <div >
          <label htmlFor='name'>Name:</label>
          <input name='name' value={formData.name} placeholder='Name' id='name' onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            onBlur={() => {
              if (formData.name === "") {
                setErrorMsg({ ...errorMsg, nameErr: "*Name is Required" })
              }
              else if (!/^[a-zA-Z\s]+$/.test(formData.name)) {
                setErrorMsg({ ...errorMsg, nameErr: '*Name Should be alphabet' });
              }
              else {
                setErrorMsg({ ...errorMsg, nameErr: "" })
              }
            }} />
          {errorMsg.nameErr && <p style={{ color: "red", padding: "0px 0px 10px 20px", textAlign: "center" }}>{errorMsg.nameErr}</p>}
        </div>
        <div >
          <label htmlFor='email'>Email:</label>
          <input value={formData.email} name='email' placeholder='Email' id='email' onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            onBlur={() => {
              if (formData.email === "") {
                setErrorMsg({ ...errorMsg, emailErr: "*Email is Required" })
              }
              else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
                setErrorMsg({ ...errorMsg, emailErr: '*Email is invalid' });
              }
              else {
                setErrorMsg({ ...errorMsg, emailErr: "" })
              }
            }}
          />
          {errorMsg.emailErr && <p style={{ color: "red", padding: "0px 0px 10px 20px", textAlign: "center" }}>{errorMsg.emailErr}</p>}

        </div >
        <div >
          <label htmlFor='phone'>Phone:</label>
          <input name='phone' value={formData.phoneNumber} placeholder='Phone' id='phone' onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
            onBlur={() => {
              if (formData.phoneNumber === "") {
                setErrorMsg({ ...errorMsg, phoneNumberErr: "*Phone Number is Required" })
              }
              else if (!/^\d{10}$/.test(formData.phoneNumber)) {
                setErrorMsg({ ...errorMsg, phoneNumberErr: "*Phone Number is Invalid" })

              }
              else {
                setErrorMsg({ ...errorMsg, phoneNumberErr: "" })
              }
            }}
          />
          {errorMsg.phoneNumberErr && <p style={{ color: "red", padding: "0px 0px 10px 20px", textAlign: "center" }}>{errorMsg.phoneNumberErr}</p>}

        </div>
        <div style={{ display: "flex" }}>
          <label htmlFor='message'>Message:</label>
          <textarea name="message" value={formData.message} placeholder='Message' cols=
            {1} rows={5} id='message' onChange={(e) => setFormData({ ...formData, message: e.target.value })} />
        </div>
        <div>
          <input type='submit' />
        </div>
      </form>
      {modalStatus && <Modal formData={formData} setModalStatus={setModalStatus} setFormData={setFormData} />}
    </>
  )
}

export default Form