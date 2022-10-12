const getMonth = (callback) => {
    setTimeout(() => {
        let error = true
        let month = ['January', 'February', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember']
        if(!error) {
            callback(null, month)
        } else {
            callback(new Error("Sorry Data Not Found"), [])
        }
    }, 3000)
}

const tampilkan = (err, bulan) => {
    if(err){
        console.log(err.message)
    }
    let hasil = bulan.map(name => name)
    console.log(hasil)
}

getMonth(tampilkan);