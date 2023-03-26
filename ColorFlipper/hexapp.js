const colorBackhex = ['A','B','C','D','E','F',0,1,2,3,4,5,6,7,8,9]
const btn = document.getElementById("btn");
const text = document.querySelector(".color");
btn.addEventListener("click", () => {
    // const randomaNumber = getRandomNumber();
    // console.log(randomaNumber)
    let hexcolor='#';
    for(let i=0;i<6;i++){
        hexcolor+=colorBackhex[getRandomNumber()]
    }
    document.body.style.backgroundColor = hexcolor;
    text.textContent=hexcolor
});
const getRandomNumber = () => {
    return Math.floor(Math.random() * colorBackhex.length)
}

