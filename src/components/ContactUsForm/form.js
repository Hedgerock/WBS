export const form = {
    name: '',
    phone: '',
    company: '',
    email: '',
    message: '',
    files: [null]
}

export const formValidation = (form) => {
    return (
        form.name &&
        form.phone &&
        form.company &&
        form.message &&
        form.email
    )
}