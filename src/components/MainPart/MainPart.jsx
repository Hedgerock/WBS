import { ContactUs } from '../ContactUs';
import { Earth } from '../Earth/Earth';
import './MainPart.css';
import { AdditionalInfoContainer } from '../AdditionalInfoContainer';
import { ExpertiesBox } from '../ExpertiesBox';
import { BusinessLines } from '../BusinessLines';
import { WhyUs } from '../WhyUs';

export const MainPart = () => {

    return (
        <div className="main-part">
            <div className="main-part-box">
                <div className="about-us">
                    <h2 className='about-us__title'>
                        We facilitate, coordinate, negotiate and help our customers find the best solution.
                    </h2>
                    <ContactUs className = { 'contact-us_main-part' } text = { 'Learn more' }/>
                </div>
                <div className="additional-info">
                    <Earth />
                    <AdditionalInfoContainer />
                </div>
                <div className="additional-info additional-info_experties">
                    <ExpertiesBox />
                </div>
            </div>
            <BusinessLines />
            <WhyUs />
        </div>
    )
}