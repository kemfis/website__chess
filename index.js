let cartsOn = document.getElementById("carts__first")
let cartOff = document.getElementById("carts__second")
let score = document.getElementById("score")
let buttonHelp = document.getElementById("help")
let counterR = document.getElementById("counter__right")
let counterL = document.getElementById("counter__left")
let catOne = document.getElementById("one")
let catTwo = document.getElementById("two")
let catThree = document.getElementById("three")
let catFour = document.getElementById("four")
let catFive = document.getElementById("five")
let catSix = document.getElementById("six")

counterR.onclick = function(){
    cartsOn.classList.add("carts__second")
    cartOff.classList.remove("carts__second")
    score.textContent = "6/6"  
    counterR.style.background= "#D6D6D6"   
    counterL.style.background= "#313131"   
}

counterL.onclick = function(){
    cartsOn.classList.remove("carts__second")
    cartOff.classList.add("carts__second")
    score.textContent = "3/6"   
    counterR.style.background= "#313131"   
    counterL.style.background= "#D6D6D6" 
}

counterL.onmouseover = function(){
    counterL.style.background= "#FBCE51"
}

counterR.onmouseover = function(){
    counterR.style.background= "#FBCE51"
}
//------------------------------------------
catOne.onmouseover = function(){
    catOne.src = "img/main/cat1.jpg";
}
catOne.onmouseout = function(){
    catOne.src = "img/main/cart.png";
}

catTwo.onmouseover = function(){
    catTwo.src = "img/main/cat2.jpg";
}
catTwo.onmouseout = function(){
    catTwo.src = "img/main/cart.png";
}

catThree.onmouseover = function(){
    catThree.src = "img/main/cat3.jpg";
}
catThree.onmouseout = function(){
    catThree.src = "img/main/cart.png";
}
catFour.onmouseover = function(){
    catFour.src = "img/main/cat4.jpg";
}
catFour.onmouseout = function(){
    catFour.src = "img/main/cart.png";
}
catFive.onmouseover = function(){
    catFive.src = "img/main/cat5.jpg";
}
catFive.onmouseout = function(){
    catFive.src = "img/main/cart.png";
}
catSix.onmouseover = function(){
    catSix.src = "img/main/cat6.jpg";
}
catSix.onmouseout = function(){
    catSix.src = "img/main/cart.png";
}









