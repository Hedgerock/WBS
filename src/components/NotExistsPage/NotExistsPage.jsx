import { ContactUs } from '../ContactUs'
import { Footer } from '../Footer'
import { HeaderBox } from '../HeaderBox'
import { MainPart } from '../MainPart'
import helm from './helm.png'
import './NotExistsPage.css'

export const NotExistsPage = () => {
    
    return (
        <>
            <HeaderBox/>
            <MainPart className={ 'not-exists' }>
                <h1 className='not-exists-title'>Page not found</h1>
                <span className='not-exists-text'>This page you are looking for doesn't exist</span>
                <div className="helm">
                    <img src={ helm } alt="" className="helm__src" />
                </div>
                <ContactUs link={ '/' } text = { 'Back to homepage' }/>
            </MainPart>
            <Footer />
        </>
    )
}