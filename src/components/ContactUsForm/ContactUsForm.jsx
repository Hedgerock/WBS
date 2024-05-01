import { useState } from "react";
import { Agreement } from "./Agreement";
import { FormLabel } from "./FormLabel";
import { InputFile } from "./FormLabel/InputFile";
import { form, formValidation } from "./form";
import { formElements } from "./FormLabel/formElements";
import './ContactUsForm.css';
import { initFormData } from "./utils/initFormData";
import { SendStatusConfirmed } from "./SendStatus/SendStatusConfirmed";
import { SendStatusError } from "./SendStatus/SendStatusError";

export const ContactUsForm = () => {
    const [userAgree, setUserAgree] = useState(false);
    const [notValidForm, setNotValidForm] = useState(false);
    const [formIsValid, setFormIsValid] = useState(false);
    const [currentForm, setCurrentForm] = useState(form);
    const [ reqStatus, setReqStatus ] = useState(false);
    const [ is404, setIs404 ] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formValidation(currentForm)) {
            setNotValidForm(true);
            return;
        }
        const formData =  initFormData(currentForm);
        let request;

        try {
            request = await fetch('http://localhost:80/test/send-email.php', {
                method: 'POST',
                body: formData
            }) 
        } catch {
            setIs404(true);
            return;
        }

        if (request.status === 200) {
            setReqStatus(true)
        }

        setFormIsValid(true);
        setCurrentForm({...form});
        setUserAgree(false);
        setNotValidForm(false);
    };    

    return (
        <>
            <form className="contact-us-form" onSubmit={handleSubmit}>
                {formElements.map((el, index) => (
                    <FormLabel 
                        data={el} 
                        key={index} 
                        currentForm={currentForm}
                        notValidForm={notValidForm}
                        setCurrentForm={setCurrentForm}
                        formIsValid={formIsValid}
                    />
                ))}
                <InputFile  
                    currentForm={currentForm}
                    setCurrentForm={setCurrentForm}
                    formIsValid={formIsValid}
                />
                <Agreement setUserAgree={setUserAgree} formIsValid = { formIsValid }/>
                <button 
                    className='contact-us-form-submit-btn contact-us' 
                    disabled={!userAgree}
                >
                    <span className='contact-us__text'>Submit</span>
                    <i className='contact-us__icon'></i>
                </button>
            </form>
            { formIsValid && reqStatus && <SendStatusConfirmed /> }
            { is404 && <SendStatusError handleSubmit = { handleSubmit }/> }
        </>
    );
};
