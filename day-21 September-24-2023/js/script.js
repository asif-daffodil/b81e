const cities = document.getElementById("cities");
const details = document.querySelector(".details");
const cityArr = Array.from(cities.children);
const dtlArr = Array.from(details.children);

cityArr.map(city => {
    city.addEventListener("click", (e)=>{
       const clickedIndex = cityArr.indexOf(e.target);
       cityArr.map((c, i)=> {
            if(clickedIndex === i){
                cityArr[i].classList.add("active");
                dtlArr[i].classList.remove("d-none");
            }else{
                cityArr[i].classList.remove("active");
                dtlArr[i].classList.add("d-none");
            }
       })
    })
});