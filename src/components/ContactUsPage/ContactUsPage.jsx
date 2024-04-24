import { HeaderBox } from '../HeaderBox'
import './ContactUsPage.css'
import { Footer } from '../Footer'
import { MainPart } from '../MainPart'
import background from './bg.png'
import { ContactUsForm } from '../ContactUsForm'
import { Contacts } from '../Contacts'

const ContactUsPage = () => {
  return (
    <div className="main-container">
        <HeaderBox className={ 'contact-us' } />
        <MainPart className={ 'contact-us' }>
          <div className="picture-bg">
              <img src={ background } alt="" className="picture-bg__src" />
          </div>
          <h1 className='main-container__title main-container__title_contact-us' >Contact Us</h1>
          <div className="contact-box">
            <ContactUsForm />
            <Contacts />
          </div>
        </MainPart>
        <Footer />
    </div>
  )
}

export default ContactUsPage