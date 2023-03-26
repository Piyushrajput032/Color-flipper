const colorBack = ['green', 'red', 'rgba(113,122,200)', '#f15035']
const btn = document.getElementById("btn");
const text = document.querySelector(".color");
btn.addEventListener("click", () => {
    const randomaNumber = getRandomNumber();
    console.log(randomaNumber)
    document.body.style.backgroundColor = colorBack[randomaNumber];
    text.textContent=colorBack[randomaNumber]
});
const getRandomNumber = () => {
    return Math.floor(Math.random() * colorBack.length)
}


