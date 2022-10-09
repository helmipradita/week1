const name = [
    "Abigail", "Alexandra", "Alison",
    "Amanda", "Angela", "Bella",
    "Carol", "Caroline", "Carolyn",
    "Deirdre", "Diana", "Elizabeth",
    "Ella", "Faith", "Olivia", "Penelope"]

let lower = name.map(name => {
    return name.toLowerCase()
})

function searchName(str, num, callback) {
    let hasil = lower.filter(a => a.includes(str));
    let seleksi = hasil.filter((x, y) => y < num)
    
    callback(seleksi)
}

function callback(result){
    console.log(result)
}

searchName("an", 3, callback)