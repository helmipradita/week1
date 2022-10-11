const getMonth = (callback) => {
    setTimeout(() => {
        let error = false
        let month = ['January', 'February', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember']
        if(!error) {
            callback(null, month)
        } else {
            callback(new Error("Sorry Data Not Found"), [])
            console.log(error)
        }
    }, 3000)
}

const tampilkan = (err, bulan) => {
    let hasil = bulan.map(name => name)
    console.log(hasil)
}

getMonth(tampilkan);