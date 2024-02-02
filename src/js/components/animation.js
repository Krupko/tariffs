/*? ======= Анимация начало ======= */
const heroCardAnimation = document.querySelectorAll('.hero__card--js');
let windowWith = window.innerWidth


setTimeout(() => {
  heroCardAnimation.forEach((e) => {
    e.classList.add('hero__card-animation')
  }), 1000
  if (windowWith < 718) {
    heroCardAnimation.forEach((e) => {
      e.classList.remove('hero__card-animation')
      console.log(e)
    })
  }
})




// console.log(noneAnimation)
/*? ======= Анимация конец ======= */
