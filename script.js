// this method for capture all the element 
const body = document.body
const slides = document.querySelectorAll('.slide')
const leftBtn = document.getElementById('left')
const rightBtn = document.getElementById('right')


let activeSlide = 0
// this method for right side btn when you click it .it will be increment 
rightBtn.addEventListener('click', () => {
  activeSlide++

  if (activeSlide > slides.length - 1) {
    activeSlide = 0
  }

  setBgToBody()
  setActiveSlide()
})

// this method for left btn.when you click it .it will be decrease a number
leftBtn.addEventListener('click', () => {
  activeSlide--

  if (activeSlide < 0) {
    activeSlide = slides.length - 1
  }

  setBgToBody()
  setActiveSlide()
})

setBgToBody()
// this method for all the background image add
function setBgToBody() {
  body.style.backgroundImage = slides[activeSlide].style.backgroundImage
}

// 
function setActiveSlide() {
  slides.forEach((slide) => slide.classList.remove('active'))

  slides[activeSlide].classList.add('active')
}