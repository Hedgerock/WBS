import { Link } from 'react-router-dom'
import './Agreement.css'
import { useEffect, useState } from 'react'

export const Agreement = (props) => {
    const { setUserAgree, formIsValid } = props
    const [ checkboxState, setCheckboxState ] = useState(false);

    useEffect(() => {
        setCheckboxState(false);
    }, [formIsValid])

    return (
        <div className="agreement">
            <label className='agreement-label'>
                <span className='agreement-label__text'>
                By ticking this box, I confirm that I have read the information below.
                </span>
                <input type='checkbox'
                checked = { checkboxState } 
                onChange={ e => {
                    e.target.checked ? setUserAgree(true) : setUserAgree(false)
                    setCheckboxState(prev => !prev)
                }}
                className='agreement-label__input'
                />
            </label>
            <p className='agreement__info'> {/* Future link to agreement*/}
                The information collected through WBS Shipbrokers’ 
                contact forms is recorded in a digitised file by the building 
                or the service in question in order to respond to your requests. 
                Learn more about
                <Link className='agreement__info agreement__info_link' to = '/WBS/terms-and-conditions'>your data management and rights.</Link>
            </p>
        </div>
    )
}