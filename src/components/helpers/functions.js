const readPhoto = (e) => {
    return createReader(e.target.files[0])
}

const createReader = (value) => {
    return new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(value);
        reader.onload = () => {
            resolve(reader.result)
        }
    })
}
export{
    readPhoto
}