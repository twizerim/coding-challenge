function sortMerge(arr1,arr2){
    
    let mergeArray=[]
    let i=0
    let j=0

    while( i< arr1.length &&j<arr2.length){
        if(arr1[i]<arr2[j]){
            mergeArray.push(arr1[i])
            i++
        }else{
            mergeArray.push(arr2[j])
            j++
        }
    }
    while(i<arr1.length){
        mergeArray.push(arr1[i])
        i++
    }
    while(j<arr2.length){
        mergeArray.push(arr2[j])
        j++
    }
    return mergeArray
}

const array1=[1,2,3,4,5,6,7]
const array2=[,23,4,8,9,]
const margedArray=sortMerge(array1,array2)

console.log(`array1 is: ${array1}`)
console.log(`array2 is:${array2}`)
console.log(margedArray)