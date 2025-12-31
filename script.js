let display = document.getElementById("display")
let lastResult = false

function appendValue(value) {
if (lastResult && !isNaN(value)) {
display.textContent = ""
lastResult = false
}
display.textContent += value
}

function clearDisplay() {
display.textContent = ""
}

function calculate() {
try {
display.textContent = eval(display.textContent)
lastResult = true
} catch {
display.textContent = "Error"
}
}

document.addEventListener("keydown", function (e) {
if (e.key >= "0" && e.key <= "9") {
appendValue(e.key)
}

if (e.key === "+" || e.key === "-" || e.key === "*" || e.key === "/") {
appendValue(e.key)
}

if (e.key === ".") {
appendValue(".")
}

if (e.key === "Enter" || e.key === "=") {
e.preventDefault()
calculate()
}

if (e.key === "Backspace") {
display.textContent = display.textContent.slice(0, -1)
}

if (e.key === "Escape") {
clearDisplay()
}
})
