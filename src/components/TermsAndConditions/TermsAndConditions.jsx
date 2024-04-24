import React from 'react';
import { Footer } from '../Footer';
import { HeaderBox } from '../HeaderBox';
import { MainPart } from '../MainPart';
import './TermsAndConditions.css';
import { definitions } from './definitions';
import { paragraphs } from './paragraphs';

export const TermsAndConditions = () => {
    
    return (
        <div className="termsAndConditions">
            <HeaderBox />
                <MainPart className={ 'terms-and-conditions' }>
                    <div className="terms-and-conditions-box">
                        <h3 className='terms-and-conditions-box__title'>Terms and Conditions for Shipbrokers</h3>
                        <p className='terms-and-conditions-box__paragraph'>
                            <span className='terms-and-conditions-box__text'>
                                These Conditions apply to all dealings between 
                                the Client and the Broker and will be effective 
                                whenever the Client requests the Broker to provide 
                                Services or the Client responds to the Broker in relation to 
                                the provision of Services. 
                                These Conditions create a legally binding 
                                Contract between the Client and the Broker 
                                (Conditions, Client, Broker, Services and Contract are defined below).
                            </span>
                        </p>
                        <h3 className='terms-and-conditions-box__title'> 
                            Attention is specifically drawn to the provisions of these Conditions that limit the Broker’s liability.
                        </h3>
                        <h3 className='terms-and-conditions-box__title'>Definitions</h3>
                        <p className='terms-and-conditions-box__paragraph'>
                            <span className='terms-and-conditions-box__text'>
                            In these terms and conditions the following definitions apply</span> 
                            <b className='terms-and-conditions-box__bold-text'>“Broker”</b>
                            <span className='terms-and-conditions-box__text'>
                            the company of the Broker Group which shall have been requested to provide Services 
                            by the Client or to which the Client shall have responded in relation to the provision of Services.
                            </span>
                        </p>
                        {
                            definitions.map((item, index) => (
                                <p className='terms-and-conditions-box__paragraph' key={ index }>
                                    {
                                        item.bold && <b className='terms-and-conditions-box__bold-text'>{item.bold}</b>
                                    }
                                    <span className='terms-and-conditions-box__text'>
                                        { item.text}
                                    </span>
                                </p>
                            ))
                        }
                        {
                            paragraphs.map((item, index) => (
                                <React.Fragment key ={ index }>
                                    <h3 className='terms-and-conditions-box__title'>{item.title}</h3>
                                    { item.subTitle && 
                                        <h3 className='terms-and-conditions-box__sub-title'>
                                            { item.subTitle }
                                        </h3>
                                    }
                                    <p className='terms-and-conditions-box__paragraph'>
                                        <span className='terms-and-conditions-box__text'>
                                            { item.text }
                                        </span>
                                    </p>
                                    { item.textExtra && 
                                        <p className='terms-and-conditions-box__paragraph'>
                                            <span className='terms-and-conditions-box__text'>
                                                { item.textExtra }
                                            </span>
                                        </p>
                                    }
                                </React.Fragment>
                            ))
                        }
                    </div>
                </MainPart>
            <Footer />
        </div>
    )
}