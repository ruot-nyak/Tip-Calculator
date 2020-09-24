const display = document.querySelector('#display')
const billInput = document.querySelector('#bill')
const tipInput = document.querySelector('#tip')
const peopleInput = document.querySelector('#people')

console.log(display.innerHTML) // prints the text inside the tags (adding text simular to python)
console.log(billInput.value) // prints the value entered into the input

billInput.value = 999.88 // Set the value to 999.88

function calculateTip(){
    const billValue = billInput.value 
    const tipValue = tipInput.value
    const peopleValue = peopleInput.value

    const tipAmount = billValue * tipValue / 100
    const total = billValue + tipAmount / peopleValue

    display.innerHTML = total
}

calculateTip('')
billInput.addEventListener('input', calculateTip)
tipInput.addEventListener('input', calculateTip)
peopleInput.addEventListener('input', calculateTip)
