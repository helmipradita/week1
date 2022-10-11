  const jadwalKegiatan = (task) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(task){
                resolve(task)
                
            } else {
                reject('belum memasukkan task')
            }
        }, 2000)
    })
    .then((result) => {
        console.error(result)
    })
    .catch((error) => {
        console.error(error)
    })
}

const ganjilGenap = (bilangan) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(bilangan%2 == 0) {
                resolve(`Bilangan ${bilangan} adalah genap`)
            } else {
                reject(`Bilangan ${bilangan} adalah ganjil`)
            }
        }, 2000)
    })
    .then((result) => {
        console.error(result)
    })
    .catch((error) => {
        console.error(error)
    })
}

jadwalKegiatan("")
ganjilGenap(4)