import { ContactUs } from "../ContactUs"
import { Contacts } from "../Contacts";
import './WhyUs.css'
import whyUsImg from './whyUsImg.jpg';

export const WhyUs = () => {

    return (
        <div className="why-us">
            <div className="why-us-container">
                <div className="why-us-box">
                    <h2 className="why-us-box__title">Why choose us?</h2>
                    <p className="why-us-box__text">
                        With an all-encompassing industry presence, we ensure 
                        that every requirement a client might have is met with excellent 
                        service and transcends the shipping industry.
                    </p>
                    <p className="why-us-box__text">
                        Our worldwide team can show a client every opportunity 
                        available to them and help them capitalize on emerging market trends. 
                        A long-standing background in the shipping industry allows us 
                        to unlock doors and give assurance. Our maritime expertise 
                        enables us to make business happen all around the world.
                    </p>
                    <ContactUs className = { 'contact-us_why-us' }/>
                </div>
                <Contacts />
            </div>
            <div className="picture">
                <img src={ whyUsImg } alt="" className="picture__src" />
            </div>
        </div>
    )
}