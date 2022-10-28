const result = document.querySelector("#result")
const dot = document.querySelector("#dot")

const [clear, r, q] = [0, 1, 2];

let num1 = 0;
let num2 = 0;
let running_operation;

const specialOperations = [
    document.querySelector("#c"),
    document.querySelector("#r"),
    document.querySelector("#q")
]

specialOperations[r].addEventListener("click", () => {
    result.innerHTML = Math.sqrt(num1)
    num1 = Math.sqrt(num1)
})
specialOperations[q].addEventListener("click", () => {
    result.innerHTML = num1 * num1
    num1 *= num1
})
specialOperations[clear].addEventListener("click", () => { result.innerHTML = 0; num1 = 0; num2 = 0; running_operation = false })

const [divider, multiplier, minus, sum, equals] = [0, 1, 2, 3, 4]
const operations = [
    document.querySelector("#divider"),
    document.querySelector("#multiplier"),
    document.querySelector("#minus"),
    document.querySelector("#sum"),
    document.querySelector("#equals"),
]

operations[equals].addEventListener("click", (e) => {
    console.log(`${num1} ${running_operation} ${num2}`)
    switch (running_operation) {
        case "/":
            result.innerHTML = Number(num1) / Number(num2);
            break;
        case "x":
            result.innerHTML = Number(num1) * Number(num2);
            break;
        case "-":
            result.innerHTML = Number(num1) - Number(num2);
            break;
        case "+":
            result.innerHTML = Number(num1) + Number(num2);
            break;
    }
    num1 = result.innerHTML
    num2 = 0;
    running_operation = false;
})

for (let i = 0; i < operations.length - 1; i++) {
    let op = operations[i]
    op.addEventListener("click", () => {
        if (!running_operation) {
            result.innerHTML += op.innerText
            running_operation = op.innerText;
        }
    })
}

const numbers = document.querySelectorAll(".number")
for (let i = 0; i < numbers.length; i++) {
    let num = numbers[i]
    num.addEventListener("click", () => {
        result.innerHTML == 0
            ? result.innerHTML = num.innerText
            : result.innerHTML += num.innerText

        if (running_operation) {
            num2 += num.innerText
        } else {
            num1 += num.innerText
        }
    })
}

dot.addEventListener("click", () => {
    if (running_operation) {
        num2 += "."
        result.innerHTML = num2
    } else {
        num1 += "."
        result.innerHTML = num1
    }
})