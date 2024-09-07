const hamburger = document.querySelector('.hamburger')
const navHidden = document.querySelector('.nav-hidden')

hamburger.addEventListener('click',()=>{
    navHidden.classList.toggle('nav-shown')
})


function showImage(element) {
    var mainImage = document.getElementById('displayedImage');
    mainImage.src = element.src;
}
