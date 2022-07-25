let adviceID = document.querySelector(".id-num")
let adviceText = document.querySelector(".advice-text p")

const getAdvice = async () => {
    try {
        const response = await fetch("https://api.adviceslip.com/advice", {method: "GET"})
        const result = await response.json()
        console.log(result.slip);

        adviceID.innerText = `#${result.slip.id}`
        adviceText.innerText = `"${result.slip.advice}"`;
    } catch(err) {
        adviceText.innerText = err.message
    }
}

getAdvice()