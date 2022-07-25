let adviceID = document.querySelector(".id-num");
let adviceText = document.getElementById("text");

const getAdvice = async () => {
    try {
        const response = await fetch("https://api.adviceslip.com/advice", {method: "GET"});
        const result = await response.json();

        adviceID.innerText = `#${result.slip.id}`;
        adviceText.innerText = `"${result.slip.advice}"`;
    } catch(err) {
        adviceText.innerText = err.message;
    }
}

getAdvice();