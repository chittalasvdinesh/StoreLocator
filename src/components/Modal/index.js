import React from 'react';
import Styles from './Modal.module.css'

const Modal = ({ formData,setModalStatus, setFormData }) => {
    return (
        <div className={Styles.modal_container}>
            <div className={Styles.modal_box}>
                <h2>User Information</h2>
                <p>Name: {formData.name}</p>
                <p>Phone: {formData.phoneNumber}</p>
                <p> Email: {formData.email}</p>
                <p>Message: {formData.message}</p>
                <button className={Styles.close_button} onClick={() => {
                    setModalStatus(false);
                    setFormData({
                        name: "",
                        email: "",
                        phoneNumber: "",
                        message: ""
                    })
                }}>&#10006;</button>

            </div>

        </div>
    )
}

export default Modal;