const btn= document.getElementById("btn");
const color= document.querySelector(".color");


function getRandomNumber(multiplyBy){
    return Math.floor(Math.random()*multiplyBy)
}


btn.addEventListener('click',()=>{
    const colors=["green","red","#f150f5",`rgba(${getRandomNumber(250)},${getRandomNumber(250)},${getRandomNumber(250)})`];
    const randomNumber=getRandomNumber(colors.length);
    document.body.style.backgroundColor=colors[randomNumber];
    color.textContent=colors[randomNumber];
})


