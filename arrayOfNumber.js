nilai=['123','9','27'];
let hasil2  
function arrayOfNumber(data){
    hasil = data.reduce((tambah , current ) => tambah + current)
    hasil=hasil.toString().split('') 
    for(i = 0; i<hasil.length; i++){
        hasil[i]= Number(hasil[i])
    }
    if(hasil.length > 1){
        arrayOfNumber(hasil)
    } else {
        hasil2 = hasil.map(i=>i)
    }
}
arrayOfNumber(nilai)
console.log(hasil2)