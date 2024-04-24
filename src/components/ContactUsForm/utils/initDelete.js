export const initDeleteFile = (props) => {
    const { files, index, setFiles, setCurrentForm, currentForm } = props

    const newFiles = [...files];
    newFiles.splice(index, 1);
    setFiles(newFiles);
    setCurrentForm({ ...currentForm, files: newFiles.filter(el => el && el !== null)})
}