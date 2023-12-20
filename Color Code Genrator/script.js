const getColor = () => {

    // hex code
    const hexNum = Math.floor(Math.random() * 16777215);
    const randomCode = "#" + hexNum.toString(16);
    document.getElementById("display").style.backgroundColor = randomCode;
    document.getElementById("code").innerText = randomCode;

    // copy code
    navigator.clipboard.writeText(randomCode);
}

// event call
document.getElementById("btn").addEventListener(
    "click",
    getColor
)

// init call
getColor();

