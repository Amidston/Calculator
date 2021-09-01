const screen = document.getElementById("text")
const one = document.getElementById("one")
const two = document.getElementById("two")
const three = document.getElementById("three")
const four = document.getElementById("four")
const five = document.getElementById("five")
const six = document.getElementById("six")
const seven = document.getElementById("seven")
const eight = document.getElementById("eight")
const nine = document.getElementById("nine")
const zero = document.getElementById("zero")
const plus = document.getElementById("plus")
const minus = document.getElementById("minus")
const multiply = document.getElementById("multiply")
const divide = document.getElementById("divide")
const point = document.getElementById("point")
const result = document.getElementById("result")

function disableButton() {
  plus.disabled = true
  minus.disabled = true
  multiply.disabled = true
  divide.disabled = true
  point.disabled = true
  result.disabled = true
}

function enableButton() {
  plus.disabled = false
  minus.disabled = false
  multiply.disabled = false
  divide.disabled = false
  point.disabled = false
  result.disabled = false
}
function limit() {
  if (screen.value.length > 16) {
    screen.value = screen.value.substring(0, 16)
  }
}

one.addEventListener("click", () => {
  screen.value += "1"
  enableButton()
  limit()
})

two.addEventListener("click", () => {
  screen.value += "2"
  enableButton()
  limit()
})

three.addEventListener("click", () => {
  screen.value += "3"
  enableButton()
  limit()
})

four.addEventListener("click", () => {
  screen.value += "4"
  enableButton()
  limit()
})

five.addEventListener("click", () => {
  screen.value += "5"
  enableButton()
  limit()
})

six.addEventListener("click", () => {
  screen.value += "6"
  enableButton()
  limit()
})

seven.addEventListener("click", () => {
  screen.value += "7"
  enableButton()
  limit()
})
eight.addEventListener("click", () => {
  screen.value += "8"
  enableButton()
  limit()
})

nine.addEventListener("click", () => {
  screen.value += "9"
  enableButton()
  limit()
})

zero.addEventListener("click", () => {
  screen.value += "0"
  enableButton()
  limit()
})

plus.addEventListener("click", () => {
  screen.value += "+"
  disableButton()
  limit()
})

minus.addEventListener("click", () => {
  screen.value += "-"
  disableButton()
  limit()
})

multiply.addEventListener("click", () => {
  screen.value += "*"
  disableButton()
  limit()
})

divide.addEventListener("click", () => {
  screen.value += "/"
  disableButton()
  limit()
})

point.addEventListener("click", () => {
  screen.value += "."
  disableButton()
  limit()
})

let signs = true
document.addEventListener("keypress", (e) => {
  if (
    (e.key == "/" && signs) ||
    (e.key == "+" && signs) ||
    (e.key == "-" && signs) ||
    (e.key == "*" && signs) ||
    (e.key == "." && signs)
  ) {
    screen.value += e.key
    signs = false
    limit()
  } else if (e.key == "Enter") {
    screen.value = eval(screen.value)
    limit()
  } else if (isNaN(e.key)) {
    screen.value = screen.value.substring(0, screen.value.length - 1)
    enableButton()
    limit()
  } else {
    screen.value += e.key
    signs = true
    limit()
  }
})

result.addEventListener("click", () => {
  screen.value = eval(screen.value)
  limit()
})
