function shiftArry(arr){
    if(arr.length<=1){
        return arr
    }

    const shiftedarray=arr.slice(1).concat(arr[0])

    return shiftedarray

}
const Arry=[1,3,5,7,8,]
const origshifit=shiftArry(Arry)
console.log(origshifit)
