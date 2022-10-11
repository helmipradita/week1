const cekHariKerja = (day) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dataDay = ['senin', 'selasa', 'rabu', 'kamis', 'jumat']
            let cek = dataDay.find((item) => {
                return item === day
            })
            if(cek) {
                resolve(cek)
            } else {
                reject(new Error(`Hari ini bukan hari kerja`))
            }
        }, 3000)
    })
}

cekHariKerja('minggu')
.then(day => {
    console.log(day)
})
.catch(error => {
    console.log(`${error.message}`)
})
//then..catch digunakan untuk promise sehingga yang dieksekusi sesuai dengan promise yang ada


function cekHariKerja1(day) {
    try {
        setTimeout(function() {
            console.log(`ini dari try...catch ${day}`)
        })
        
    } catch(err) {
        console.log(err)
    }
}
cekHariKerja1('senin')
//try...catch digunakan untuk await sebagai error handling sehingga dieksekusi secara langsung