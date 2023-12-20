const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerSet = "abcdefghijklmnopqrstuvwxyz";
const numberSet = "0123456789";
const symbolSet = "!@#$%^&*()+*-/?<>{}[]-_=\|";

// selector
const passwordBox = document.getElementById("input")
const totlength = document.getElementById("lenght")
const upperInp = document.getElementById("upper")
const lowerInp = document.getElementById("small")
const numberInp = document.getElementById("num")
const symbolInp = document.getElementById("sym")


const getRandomData = (dataSet) => {
    return dataSet[Math.floor(Math.random() * dataSet.length)]


}




const genratePass = (password = "") => {

    if (upperInp.checked) {
        password += getRandomData(upperSet);
    }
    if (lowerInp.checked) {
        password += getRandomData(lowerSet);
    }
    if (numberInp.checked) {
        password += getRandomData(numberSet);
    }
    if (symbolInp.checked) {
        password += getRandomData(symbolSet);
    }
    if (password.length < totlength.value) {
        return genratePass(password)
    }

    passwordBox.innerText = truncateString(password, totlength.value)
}



document.getElementById("btn").addEventListener(
    "click",
    function() {
        genratePass();

    }
)



function truncateString(str, num) {
    if (str.length > num) {
        let subStr = str.substring(0, num)
        return subStr;
    } else {
        return str;
    }
}


