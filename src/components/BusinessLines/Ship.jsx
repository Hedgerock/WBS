import { ships } from '../../ships'
import { ContactUs } from '../ContactUs'

export const Ship = () => {
    return (
        <>
            {
                ships.map((ship, index) => (
                    <div className="ship" key={ index }>
                        <img className='ship__src'  src={ ship.img } alt="" />
                        <h3 className='ship__title'>{ ship.title }</h3>
                        <div className="ship-link">
                            <h3 className='ship-link__title'>
                                { ship.title }
                            </h3>
                            <p className="ship-link__text">
                                { ship.description }
                            </p>
                            <ContactUs text = { 'See more' } className = { 'contact-us_ships' } link = { ship.link }/>
                        </div>
                    </div>
                ))
            }
        </>
    )
}