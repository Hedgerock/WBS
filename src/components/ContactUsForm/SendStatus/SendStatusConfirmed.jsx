import { ContactUs } from "../../ContactUs/ContactUs"

export const SendStatusConfirmed = () => {

    return (
        <div className="form-sent">
            <h2 className="form-sent__title">Form has been sent</h2>
            <p className="form-sent__text">
                Our representative will contact you as soon as possible
            </p>
            <ContactUs link = { '/WBS' } text = { 'Back to homepage' } />
        </div>
    )
}