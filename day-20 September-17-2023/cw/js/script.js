const tousif = document.getElementById("tousif");
const akash = document.getElementById("akash");
const india = document.getElementsByClassName("india")[0];
const bangladesh = document.querySelector(".bangladesh");
const normal = document.querySelector(".normal");
const bivotso = document.querySelector(".bivotso");
const hvi = document.querySelector("#hvi");
const bd = document.querySelector(".bd");
tousif.textContent = "Tousif is not a BNP supporter";
tousif.style.cssText = "color: lightyellow; font-size: 30px; font-weight: bold;";
/* 
const tausifFunc = () => {
    tousif.textContent = "Tousif is a Awami League supporter!";
}

const tausifFunc2 = () => {
    tousif.textContent = "Tousif is not a BNP supporter!";
} 
*/

india.addEventListener("click", ()=>{
    tousif.textContent = "Tousif is a Awami League supporter!";
});
tousif.addEventListener("mouseover", ()=>{
    tousif.textContent = "Tousif is not a BNP supporter!";
});

let rc = "0123456789abcdef";
bangladesh.addEventListener("click", ()=>{
    let color = "#";
    for(let i=0; i<6; i++){
        color += rc[Math.floor(Math.random()*rc.length)];
    }
    bd.style.backgroundColor = color;
    akash.textContent = color;
});

normal.addEventListener("click", ()=>{
    hvi.src = "images/normal.jpg";
});

bivotso.addEventListener("click", ()=>{
    hvi.src = "images/bivotso.jpg";
});