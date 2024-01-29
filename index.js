function isPrime(num) {
    if (num < 2) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

function checkPrime() {
    const numberInput = document.getElementById('numberInput');
    const resultElement = document.getElementById('result');
    const number = parseInt(numberInput.value);

    if (isNaN(number)) {
        resultElement.textContent = 'Please enter a valid number.';
    } else {
        const isPrimeNumber = isPrime(number);
        resultElement.textContent = `${number} is ${isPrimeNumber ? 'prime' : 'not prime'}.`;
    }
}

// ==================================2nd challenge=====================================================

 const calculateFactolioReclusive=(number)=>{
      if(number===0 || number===1){
          return 1
      }
      return number*calculateFactolioReclusive(number-1)
 }
 const checkFactolio=()=>{
     const numberInput=document.querySelector("#factolio")
     const soltion=document.querySelector("#answer")
     const digit=parseInt(numberInput.value)

     if(isNaN(digit)){
        soltion.innerHTML=`please provide your number input`
     }else{
        const factolios=calculateFactolioReclusive(digit)
        soltion.innerHTML=`the factolio of ${digit} is ${factolios}`
     }
 }

//  ==================================3rd challenge========================

  function Findmaxvalue(numbers){ 
    if(numbers.length===0){
        return undefined
    }

    let max=numbers[0]

    for(let i=1;i<numbers.length;i++){
         if(numbers[i]>max){
            max=numbers[i]
         }
    }
    return max
    
  }
  const numbersArray =[0,1,9,2,7,3,4,5,6,8]
  const maxValue=Findmaxvalue(numbersArray)
  alert(`the maximum number is ${maxValue}`)
 
  

//   =============================================4 challenge=======================

   function reversString(string){

       let reversedString=""

       for (let i=string.length-1; i>=0;i--){
           reversedString+=string[i]
       }
       return reversedString
   }
   const originalString="TWIZERIMANA Gedeon"
   const stringReversa=reversString(originalString)
   console.log(stringReversa)

// ====================================================5 challenge================


function Sentance(string){

    return string.length
      
}
const sent="hello i am full stack softwarw developer"
const answer=Sentance(sent)
console.log(answer)

// =============================================6challeng============================

function capitalizeFirstLetter(sentence) {
    
    const words = sentence.split(' ');

    
    const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));

    const capitalizedSentence = capitalizedWords.join(' ');

    return capitalizedSentence;
}
const inputSentence = "hello i am full stack softwarw developer";
const result = capitalizeFirstLetter(inputSentence);
console.log("Original Sentence:", inputSentence);
console.log("Capitalized Sentence:", result);

// ==============================================7 challenge=============================

function removeDuplicates(arr) {
    const uniqueSet = new Set(arr);

    const uniqueArray = [...uniqueSet];

    return uniqueArray;
}
const originalArray = [1, 2, 3, 4, 2, 5, 6, 1];
const newArray = removeDuplicates(originalArray);
console.log("Original Array:", originalArray);
console.log("Array without Duplicates:", newArray);


// =================================================8 challenge======================

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

// ========================================= 9challenge=========================

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