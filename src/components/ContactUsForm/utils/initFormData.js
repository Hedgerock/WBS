export const initFormData = (currentForm) => {
    const formData = new FormData();

    for (let key in currentForm) {
        if (currentForm.hasOwnProperty(key) && key !== 'files') {
            formData.append(key, currentForm[key]);
        }
    }

    if (currentForm.files) {
        currentForm.files.forEach((file, index) => {
            formData.append(`file${index + 1}`, file);
        });
    }

    return formData
}