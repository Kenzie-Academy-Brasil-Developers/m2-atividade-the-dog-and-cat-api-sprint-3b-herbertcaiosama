const cat = document.getElementById("cat");
const dog = document.getElementById("dog");
const body = document.querySelector("body");

const catImg = document.createElement("img");
catImg.classList.add("image");

const dogImg = document.createElement("img");
dogImg.classList.add("image");

cat.appendChild(catImg);
dog.appendChild(dogImg);

async function getAnimal(animal){
    if(animal === "cat"){
        const newCat = await fetch("https://api.thecatapi.com/v1/images/search");
        const data = await newCat.json();
        const dataCat = data[0].url;
        cat.innerHTML = `<img src = ${dataCat}>`;
    }
    if(animal === "dog"){
        const newDog = await fetch("https://api.thedogapi.com/v1/images/search");
        const data = await newDog.json();
        const dataDog = data[0].url;
        dog.innerHTML = `<img src = ${dataDog}>`;
    }   
}

body.addEventListener("click", (event) => {
    if(event.target.name === "CAT"){
        getAnimal("cat");
    }
    if(event.target.name === "DOG"){
        getAnimal("dog");
    }
});