let expression = {
    expr: "20 * (((1 + 0.00517) ^ 24 - 1) / 0.00517)",
}

const data = JSON.stringify(expression)

function urlLoad() {
    const xhr = new XMLHttpRequest()
    xhr.withCredentials = false

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === this.DONE) {
            console.log(this.responseText)
        }
    })

    xhr.open("POST", "http://api.mathjs.org/v4/")
    xhr.setRequestHeader("Content-Type", "application/json")

    xhr.send(data)
}

console.log(urlLoad())
