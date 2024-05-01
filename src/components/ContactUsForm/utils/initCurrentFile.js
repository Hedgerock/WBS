export const initNewFile = (props) => {
    const { files, file, index, setFiles, setCurrentForm, currentForm, e } = props
    if (files.length > 10)  {
        return
    }

    const currentFile = e.target.files[0]
    const fileExists = files.some(file => file && file.name === currentFile.name);
    if (fileExists) {
        return
    }

    const currentArrLength = files.length - 1

    if (file && !currentFile) {
        return
    }
    const newFiles = [...files];

    newFiles[index] = currentFile;
    if (currentFile && currentArrLength === index) {
        newFiles.push(null);
    }
    setFiles(newFiles);
    setCurrentForm({ ...currentForm, files: newFiles.filter(el => el && el !== null)})
}