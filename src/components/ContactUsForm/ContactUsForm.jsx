import { useState } from "react"
import { Agreement } from "./Agreement"
import { FormLabel } from "./FormLabel"
import { InputFile } from "./FormLabel/InputFile"
import { form, formValidation } from "./form"
import { formElements } from "./FormLabel/formElements"
import './ContactUsForm.css'

export const ContactUsForm = () => {
    const [ userAgree, setUserAgree ] = useState(false)
    const [ notValidForm, setNotValidForm ] = useState(false)
    const [ formIsValid, setFormIsValid ] = useState(false);
    const [ currentForm, setCurrentForm ] = useState(form)

    return (
        <form className="contact-us-form" action='/contact-us/confirmed '>
            {
            formElements.map((el, index) => (
                <FormLabel 
                data = { el } 
                key = { index } 
                currentForm = { currentForm }
                notValidForm = { notValidForm }
                setCurrentForm = { setCurrentForm }
                formIsValid = { formIsValid }
                />
            ))
            }
            <InputFile  
                currentForm = { currentForm }
                setCurrentForm = { setCurrentForm }
                formIsValid = { formIsValid }
            />
            <Agreement setUserAgree = { setUserAgree }  />
            <button 
            className='contact-us-form-submit-btn contact-us' 
            disabled = { !userAgree}
            onClick={ (e) => {
                e.preventDefault();
                if (!formValidation(currentForm)) {
                    setNotValidForm(true);
                    setFormIsValid(false);
                    return
                }
                console.log(currentForm);
                setFormIsValid(true);
                setCurrentForm(form);
            } }
            >
            <span className='contact-us__text'>Submit</span>
            <i className='contact-us__icon'></i>
            </button>
        </form>
    )
}