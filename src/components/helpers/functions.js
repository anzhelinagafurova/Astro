const readPhoto = (e) => {
    return createReader(e.target.files[0])
}

const createReader = (value) => {
    return new Promise((resolve) => {
        const reader = new FileReader();
        try{
            reader.readAsDataURL(value);
            reader.onload = () => {
                resolve(reader.result)
            }
        }
        catch{}
    })
}

const calcucateSign = (date) => {
    date = new Date(null, Number(date.substring(5, 7)) - 1, Number(date.substring(8)))
    if (date <= new Date('1900-01-19') || date >= new Date('1900-12-22')) {
        return ['Козерог', 0]
    }
    if (new Date('1900-20-01') <= date && date <= new Date('1900-18-02')) {
        return ['Водолей', 1]
    }
    if (new Date('1900-02-19') <= date && date <= new Date('1900-03-20')) {
        return ['Рыбы', 2]
    }
    if (new Date('1900-03-21') <= date && date <= new Date('1900-04-19')) {
        return ['Овен', 3]
    }
    if (new Date('1900-04-20') <= date && date <= new Date('1900-05-20')) {
        return ['Телец', 4]
    }
    if (new Date('1900-05-21') <= date && date <= new Date('1900-06-20')) {
        return ['Близнецы', 5]
    }
    if (new Date('1900-06-21') <= date && date <= new Date('1900-07-22')) {
        return ['Рак', 6]
    }
    if (new Date('1900-07-23') <= date && date <= new Date('1900-08-22')) {
        return ['Лев', 7]
    }
    if (new Date('1900-08-23') <= date && date <= new Date('1900-09-22')) {
        return ['Дева', 8]
    }
    if (new Date('1900-09-23') <= date && date <= new Date('1900-10-22')) {
        return ['Весы', 9]
    }
    if (new Date('1900-10-23') <= date && date <= new Date('1900-11-22')) {
        return ['Скорпион', 10]
    }
    if (new Date('1900-11-23') <= date && date <= new Date('1900-12-21')) {
        return ['Стрелец', 11]
    }
}

export{
    readPhoto, calcucateSign
}