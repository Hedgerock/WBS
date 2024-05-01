export const SendStatusError = (props) => {
    const { handleSubmit } = props

    return (
        <div className="form-sent form-sent_404">
            <h2 className="form-sent__title">Something went wrong</h2>
            <p className="form-sent__text">
                Form wasn't sent
            </p>
            <button
            onClick={ handleSubmit }
            className='contact-us-form-submit-btn contact-us' 
            >
                <span className='contact-us__text'>Try again</span>
                <i className='contact-us__icon'></i>
            </button>
        </div>
    )
}