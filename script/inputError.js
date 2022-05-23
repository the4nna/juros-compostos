const simulatorForm = document.getElementById("simulatorForm")

simulatorForm.addEventListener("submit", function (e) {
    sendData(e)
})

function sendData(e) {
    e.preventDefault()

    let haveError = false
    let inputName = document.forms["simulatorForm"]["name"]

    if (!inputName.value) {
        haveError = true
        inputName.classList.add("inputError")
    } else {
        inputName.classList.remove("inputError")
    }

    let inputMonthly = document.forms["simulatorForm"]["monthly"]

    if (!inputMonthly.value) {
        haveError = true
        inputMonthly.classList.add("inputError")
    } else {
        inputMonthly.classList.remove("inputError")
    }

    let inputRate = document.forms["simulatorForm"]["rate"]

    if (!inputRate.value) {
        haveError = true
        inputRate.classList.add("inputError")
    } else {
        inputRate.classList.remove("inputError")
    }

    let selectContribution = document.forms["simulatorForm"]["contribution"]

    if (!selectContribution.value) {
        haveError = true
        selectContribution.classList.add("inputError")
    } else {
        selectContribution.classList.remove("inputError")
    }

    if (!haveError) {
        simulatorForm.submit()
    }
}
