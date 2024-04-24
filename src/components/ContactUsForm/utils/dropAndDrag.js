export const handleDragOver = (e) => {
    e.preventDefault();
};

export const handleDrop = (e, files, setFiles) => {
    e.preventDefault();
    let newFiles = [...files];
    for (let i = 0; i < e.dataTransfer.files.length; i++) {
        newFiles.unshift(e.dataTransfer.files[i]);
    }
    setFiles(newFiles);
};