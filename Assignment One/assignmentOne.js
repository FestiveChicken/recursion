//Iteration function
const fibs = (input) => {
    fibsArray = []
    firstNumber = 0
    secondNumber = 1
    for (let i = 0; i < input; i++) {
        fibsArray.push(firstNumber)
        firstNumber = firstNumber + secondNumber
        secondNumber = fibsArray[i]
    }
    console.log(fibsArray)
}

//Recursive Function
const fibsRec = (num, sequence = [0, 1]) => {
    if (sequence.length >= num) {
      return sequence.slice(0, num);
    }
  
    const newNumber = sequence.at(-1) + sequence.at(-2);
    sequence.push(newNumber);
    return fibsRec(num, sequence);
  }