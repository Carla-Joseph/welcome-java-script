const fullName = 'Carla Joseph'
const numberOfCupsOfCoffee = 0
console.log(
  `My name is ${fullName} and I drink ${numberOfCupsOfCoffee} cups of coffee a day.`
)

const userName = window.prompt('What is your name?')
console.log(`Hello ${userName}, welcome!`)

const firstOperand = window.prompt('Enter a number: ')
const secondOperand = window.prompt('Enter a number: ')

const sum = firstOperand + secondOperand
console.log(`The sum is ${sum}`)

const difference = secondOperand - firstOperand
console.log(`${secondOperand} minus ${firstOperand} equals to ${difference}`)

const product = firstOperand * secondOperand
console.log(`${firstOperand} times ${secondOperand} is ${product}`)

let quotient = firstOperand / secondOperand
console.log(`${firstOperand} divided by ${secondOperand} equals to ${quotient}`)

let remainder = secondOperand / firstOperand
console.log(remainder)

const numbers = [10, 20, 13, 17, 86, 2]
let total = 0
for (let i = 0; i < numbers.length; i++) {
  total += numbers[i]
}

console.log(`The sum of the array is ${total}`)

let average = total / numbers.length
console.log(`The average number is ${average}`)

console.log(Math.min(...numbers))
console.log(Math.max(...numbers))
