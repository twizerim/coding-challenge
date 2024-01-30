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

 

