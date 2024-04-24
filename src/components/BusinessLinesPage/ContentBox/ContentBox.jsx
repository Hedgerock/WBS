import './ContentBox.css'

export const ContentBox = (props) => {
    const { images, title, text, className } = props
    return (
        <div className={ `ship-page-content-box ${ className ?  `ship-page-content-box_${className}` : ''}` }>
            <div className="ship-page-content-box-images">
            { images.map((item, index) => (
                <div className="ship-page-content-box-image" key={ index }>
                    <img 
                        className="ship-page-content-box-image__src" 
                        src = { item } 
                        alt = ''  
                        key={ item } 
                    />
                </div>
                )) 
            }
            </div>
            <div className="ship-page-content-box-info">
                <h3 className="ship-page-content-box-info__title">{ title }</h3>
                <p className="ship-page-content-box-info__text">{ text }</p>
            </div>
        </div>
    )
}