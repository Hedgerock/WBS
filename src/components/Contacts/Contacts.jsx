import { contactElements } from "./contactElements"
import './Contacts.css';

export const Contacts = () => {

    return (
        <div className="contacts">
            <h3 className='contacts__title'>Contact information</h3>
            {
                contactElements.map((contact, index) => (
                    <span 
                        className={ `contacts__value contacts__value_${ contact.title }` }
                        key = { index }
                    >
                        { contact.value }
                    </span>
                ))
            }
        </div>
    )
}