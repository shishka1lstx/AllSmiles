var slideIndex = 1
ShowSlides(slideIndex)

function changeSlide(n){
    ShowSlides(slideIndex += n )
}

function currentSlide(n){
    ShowSlides(slideIndex = n )
}

function ShowSlides(n) {
    var i;
    var slides  = document.getElementsByClassName("slider-item")
    var dots = document.getElementsByClassName("slider-dot")

    if(n < 1)
        slideIndex = slides.length
    if(n > slides.length)
        slideIndex = 1

    for(i = 0; i < slides.length; i++)
        slides[i].style.display = "None"

    for(i = 0; i < dots.length; i++)
        dots[i].className = dots[i].className.replace("active", "")
    
    
    slides[slideIndex - 1].style.display = "block"
    dots[slideIndex - 1].className +=  " active"
}