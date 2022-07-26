let adviceID = document.querySelector(".id-num");
let adviceText = document.getElementById("text");

// Get random advice on Load
const getAdvice = async () => {
    try {
        const response = await fetch("https://api.adviceslip.com/advice", {method: "GET"});
        const result = await response.json();

        adviceID.innerText = `#${result.slip.id}`;
        adviceText.innerText = `"${result.slip.advice}"`;
    } catch(err) {
        console.log(err);
    }
}
getAdvice();

// Get random advice on DICE ICON Click
document.querySelector(".dice-icon").addEventListener("click", () => getAdvice())