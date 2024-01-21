let mobileMenu = document.querySelector('.header > div .mobile-nav')
let icon = document.querySelector(".search-icon");
let header = document.querySelector('.header')

console.log(icon);



icon.addEventListener('click', () =>{
    if(mobileMenu.classList.contains('display-mobile-none')){
        mobileMenu.classList.remove('display-mobile-none')
    }else{
        mobileMenu.classList.add('display-mobile-none')
    }
})






window.onscroll = function() {

    // pageYOffset or scrollY
    if (window.scrollY > 0) {
      console.log("hi");
      header.classList.add('header-scroll-style');
    }else{
        header.classList.remove('header-scroll-style')
    }
    
  }