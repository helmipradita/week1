function SeleksiNilai(nilaiAwal, nilaiAkhir, dataArray){
    function compareNumbers(a, b) {
        return a - b;
    }
    
    dataArray.sort(compareNumbers)

    if(nilaiAwal < nilaiAkhir && dataArray.length > 5){
        let a = dataArray.filter(value => value > nilaiAwal && value < nilaiAkhir)
        if(a.length === 0) {
            console.log(`Nilai tidak ditemukan`)
        } else {
            console.log(a)
        }
    } else if(nilaiAwal > nilaiAkhir) {
        console.log(`Nilai akhir harus lebih besar dari nilai awal`)
    } else if(dataArray.length < 5) {
        console.log(`Jumlah angka dalam dataArray harus lebih dari 5`)
    } else {
        console.log(`Nilai tidak ditemukan`)
    }
}

SeleksiNilai(5, 20 , [2, 25, 4, 14, 17, 30, 8])