let image = document.getElementById("image")
let text = document.getElementById("text")
let p = document.getElementById("p")

function first() {
    image.src="/assets/training-image-01.jpg"
    text.innerHTML="First Training Class"
    p.innerHTML = "Phasellus convallis mauris sed elementum vulputate. Donec posuere leo sed dui eleifend hendrerit. <br> Sed suscipit suscipit erat, sed vehicula ligula. Aliquam ut sem fermentum sem tincidunt lacinia <br> gravida aliquam nunc. Morbi quis erat imperdiet, molestie nunc ut, accumsan diam"
}
function second() {
    image.src="/assets/training-image-02.jpg"
    text.innerHTML="Second Training Class"
    p.innerHTML = "Integer dapibus, est vel dapibus mattis, sem mauris luctus leo, ac pulvinar quam tortor a velit. Praesent <br> ultrices erat ante, in ultricies augue ultricies faucibus. Nam tellus nibh, ullamcorper at mattis non, rhoncus <br> sed massa. Cras quis pulvinar eros. Orci varius natoque penatibus et magnis dis parturient montes, <br> nascetur ridiculus mus."
}
function third() {
    image.src= "/assets/training-image-03.jpg"
    text.innerHTML="Third Training Class"
    p.innerHTML = "Fusce laoreet malesuada rhoncus. Donec ultricies diam tortor, id auctor neque posuere sit amet. Aliquam pharetra,<br> augue vel cursus porta, nisi tortor vulputate sapien, id scelerisque felis magna id felis. Proin neque metus, pellentesque <br> pharetra semper vel, accumsan a neque."
}
function forth() {
    image.src= "/assets/training-image-04.jpg"
    text.innerHTML="Forth Training Class"
    p.innerHTML = "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean <br> ultrices elementum odio ac tempus. Etiam eleifend orci lectus, eget venenatis ipsum commodo et."
}

let fit1 = document.getElementById("fit1")
let fit2 = document.getElementById("fit2")
let mus1 = document.getElementById("mus1")
let mus2 = document.getElementById("mus2")
let bod1 = document.getElementById("bod1")
let bod2 = document.getElementById("bod2")
let yog1 = document.getElementById("yog1")
let yog2 = document.getElementById("yog2")
let adv1 = document.getElementById("adv1")
let adv2 = document.getElementById("adv2")
function monday() {
    fit1.innerHTML = "10:00AM-11:30AM"
    bod2.innerHTML = "2:00PM-3:30PM"
    fit2.innerHTML = ""
    mus1.innerHTML = ""
    mus2.innerHTML = ""
    bod1.innerHTML = ""
    yog1.innerHTML = ""
    yog2.innerHTML = ""
    adv1.innerHTML = ""
    adv2.innerHTML = ""
}

function tuesday() {
    fit1.innerHTML = ""
    bod2.innerHTML = ""
    fit2.innerHTML = "2:00PM-3:30PM"
    mus1.innerHTML = ""
    mus2.innerHTML = ""
    bod1.innerHTML = "10:00AM-11:30AM"
    yog1.innerHTML = ""
    yog2.innerHTML = ""
    adv1.innerHTML = ""
    adv2.innerHTML = ""
}
function wedsnday() {
    fit1.innerHTML = ""
    bod2.innerHTML = ""
    fit2.innerHTML = ""
    mus1.innerHTML = ""
    mus2.innerHTML = ""
    bod1.innerHTML = ""
    yog1.innerHTML = "10:00AM-11:30AM"
    yog2.innerHTML = ""
    adv1.innerHTML = ""
    adv2.innerHTML = "2:00PM-3:30PM"
}
function thurday() {
    fit1.innerHTML = ""
    bod2.innerHTML = ""
    fit2.innerHTML = ""
    mus1.innerHTML = ""
    mus2.innerHTML = "2:00PM-3:30PM"
    bod1.innerHTML = ""
    yog1.innerHTML = ""
    yog2.innerHTML = ""
    adv1.innerHTML = "10:00AM-11:30AM"
    adv2.innerHTML = ""
}
function friday() {
    fit1.innerHTML = ""
    bod2.innerHTML = ""
    fit2.innerHTML = ""
    mus1.innerHTML = "10:00AM-11:30AM"
    mus2.innerHTML = ""
    bod1.innerHTML = ""
    yog1.innerHTML = ""
    yog2.innerHTML = "2:00PM-3:30PM"
    adv1.innerHTML = ""
    adv2.innerHTML = ""
}

window.addEventListener("scroll", function () { 
    let nav_bar = document.getElementById("nav_bar")  
    let scroolnum = 100
    if (pageYOffset>scroolnum) {
        nav_bar.classList.add("imagine")
    } else {
        nav_bar.classList.remove("imagine")
    }
})