import { useEffect, useState } from 'react'
import './FormLabel.css'

export const FormLabel = (props) => {
    const { data, setCurrentForm, currentForm, notValidForm, formIsValid } = props
    const { value, type, className } = data

    const [ newValue, setNewValue ] = useState('')

    useEffect(() => {
        if (formIsValid) {
            setNewValue('');
        }
    }, [formIsValid]);

    const testVal = 'Phone number'

    const maxLengthInput = 100;
    const maxLengthTextArea = 4000;

    return (
        <label 
            className={
                `contact-us-form-label contact-us-form-label_${className} 
                ${newValue 
                    ? 'full' 
                    : 'empty'
                } 
                ${ notValidForm && !newValue
                    ? 'invalid-field'
                    : '' 
                }
                `
                }
            data-value = { value }
        >
            <span className='contact-us-form-label__text'>
                { value }
            </span>
            { type === 'textarea' &&
                <span className="counter">
                    { newValue.length } / { maxLengthTextArea }
                </span>
            }
            { 
                type === 'textarea' 
                ? <textarea 
                    onChange={ e => {
                        setNewValue(e.target.value)
                        setCurrentForm({...currentForm, [className]: e.target.value})
                    }}
                    className={ `contact-us-form-label__input contact-us-form-label__input_${className}` }
                    value={ newValue }
                    maxLength={ maxLengthTextArea }
                >   
                </textarea>
                : <input
                    onChange={ e => {
                        const isNan = !/^[0-9+-]*$/g.test(e.target.value);
                        if (value === testVal && isNan) {
                            return 
                        }
                        setNewValue(e.target.value)
                        setCurrentForm({...currentForm, [className]: e.target.value})
                    }}
                    className={ `contact-us-form-label__input contact-us-form-label__input_${className}` }
                    value={ newValue }
                    type={ type }
                    required = { className === 'email' }
                    maxLength={ maxLengthInput }
                />
            }
        </label>

    )
}