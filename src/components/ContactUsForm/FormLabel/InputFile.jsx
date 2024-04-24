import { useEffect, useState } from "react";
import { handleDragOver, handleDrop } from "../utils/dropAndDrag";
import { initNewFile } from "../utils/initCurrentFile";
import { initDeleteFile } from "../utils/initDelete";
import { form } from "../form";

export const InputFile = (props) => {
    const { currentForm, setCurrentForm, formIsValid } = props

    const [ files, setFiles ] = useState(currentForm.files);
    let commonText = 'Attach your files';
    if (files.length >= 2) {
        commonText += '(optional)'
    }

    useEffect(() => {
        if (formIsValid) {
            setFiles(form.files)
        }
    }, [formIsValid, setCurrentForm])

    return (
        files.map((file, index) => (
            <div className="contact-us-form-label-container" key={ index }>
                <label 
                    className={ `contact-us-form-label contact-us-form-label_file ${ file ? 'filled' : '' }` } 
                    onDragOver={ (e) => handleDragOver(e) } 
                    onDrop={ (e) => handleDrop(e, files, setFiles) }
                >
                    <span className='contact-us-form-label__text' >
                        { file ? file.name : commonText }
                    </span>
                    <input
                        onChange={ e => initNewFile({ files, file, index, setFiles, setCurrentForm, currentForm, e }) }
                        className={ `contact-us-form-label__input contact-us-form-label__input_file` }
                        type='file'
                    />
                </label>
                {
                    file &&
                        <button 
                            onClick={() => initDeleteFile({ files, index, setFiles, setCurrentForm, currentForm }) } 
                            className="contact-us-form-label-del-btn"
                        >
                            <i className="fa-regular fa-trash-can"></i>
                    </button>
                }
            </div>
        ))
    )
}