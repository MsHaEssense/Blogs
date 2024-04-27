let angle = 0;
let direction = 1;

const toggleMenu = () =>{
    const popupMenu = document.getElementById('menu-popup');
    popupMenu.style.display = popupMenu.style.display === "block" ? "none" : "block";

    const menu = document.getElementById('rotate')
    angle += 180 * direction;
    menu.style.transform = `rotate(${angle}deg)`
    menu.style.transition = '0.5s'
    direction *= -1;
}

//to display none the menu popup when it is not closed
window.onload = function(){
    var div = document.getElementById('menu-popup')

    function checkWidth(){
        var deviceWidth = window.innerWidth;
        if(deviceWidth < 1100){
            div.style.display = "none";
        }else{
            div.style.display = 'flex'
        }
    }

    checkWidth();
    window.addEventListener('resize',checkWidth)
}

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("header").style.boxShadow = "0px 1px 8px #000000";
  } else {
    document.getElementById("header").style.boxShadow = "";
  }
}

const popup1 = () =>{
    const products = document.getElementById('popup1');
    products.style.display = products.style.display === "block" ? "none" : "block";

    // for the rotation of the product arrow when in menu
    const icon = document.getElementById('arrow1')
    angle += 180 * direction;
    icon.style.transform = `rotate(${angle}deg)`
    icon.style.transition = '0.5s'
    direction *= -1;
} 

//for scrolling on the about us part
window.smoothScroll = function(target) {
    let scrollContainer = target;
    do { //find scroll container
        scrollContainer = scrollContainer.parentNode;
        if (!scrollContainer) return;
        scrollContainer.scrollTop += 1;
    } while (scrollContainer.scrollTop == 0);

    let targetY = 0;
    do { //find the top of target relatively to the container
        if (target == scrollContainer) break;
        targetY += target.offsetTop;
    } while (target = target.offsetParent);

    scroll = function(c, a, b, i) {
        i++; if (i > 27) return;
        c.scrollTop = a + (b - a) / 28 * i;
        setTimeout(function(){ scroll(c, a, b, i); }, 1);
    }
    // start scrolling
    scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
}

document.addEventListener("DOMContentLoaded", ()=>{
    const element = document.querySelectorAll('.content1')
    const windowHeight = window.innerHeight

    const checkvisibility = () =>{
        element.forEach((element) =>{
            const position = element.getBoundingClientRect().top

            if(position < windowHeight){
                element.style.opacity = 1
            }else{
                element.style.opacity = 0
            }
        })
    }

    checkvisibility()

    window.addEventListener("scroll", () =>{
        checkvisibility()
    })
})

const links = document.querySelectorAll('.nav-link');
    
if (links.length) {
  links.forEach((link) => {
    link.addEventListener('click', (e) => {
      links.forEach((link) => {
          link.classList.remove('active');
      });
      e.preventDefault();
      link.classList.add('active');
    });
  });
}

const home = (target) =>{
    const homepageContainer = document.getElementById('homepage')
    homepageContainer.style.display = 'block'

    const serum = document.getElementById('game-blog')
    serum.style.display = 'none'

    const soap = document.getElementById('travel-blog')
    soap.style.display = 'none'

        let scrollContainer = target;
        do { //find scroll container
            scrollContainer = scrollContainer.parentNode;
            if (!scrollContainer) return;
            scrollContainer.scrollTop += 1;
        } while (scrollContainer.scrollTop == 0);
    
        let targetY = 0;
        do { //find the top of target relatively to the container
            if (target == scrollContainer) break;
            targetY += target.offsetTop;
        } while (target = target.offsetParent);
    
        scroll = function(c, a, b, i) {
            i++; if (i > 30) return;
            c.scrollTop = a + (b - a) / 30 * i;
            setTimeout(function(){ scroll(c, a, b, i); }, 1);
        }
        // start scrolling
        scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
}

const game = (target) =>{
    const homepageContainer = document.getElementById('homepage')
    homepageContainer.style.display = 'none'

    const serum = document.getElementById('game-blog')
    serum.style.display = 'block'

    const soap = document.getElementById('travel-blog')
    soap.style.display = 'none'


    let scrollContainer = target;
        do { //find scroll container
            scrollContainer = scrollContainer.parentNode;
            if (!scrollContainer) return;
            scrollContainer.scrollTop += 1;
        } while (scrollContainer.scrollTop == 0);
    
        let targetY = 0;
        do { //find the top of target relatively to the container
            if (target == scrollContainer) break;
            targetY += target.offsetTop;
        } while (target = target.offsetParent);
    
        scroll = function(c, a, b, i) {
            i++; if (i > 30) return;
            c.scrollTop = a + (b - a) / 20 * i;
            setTimeout(function(){ scroll(c, a, b, i); }, 1);
        }
        // start scrolling
        scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
}

const gameBlog = (target) =>{
    const homepageContainer = document.getElementById('homepage')
    homepageContainer.style.display = 'none'

    const serum = document.getElementById('game-blog')
    serum.style.display = 'block'

    const soap = document.getElementById('travel-blog')
    soap.style.display = 'none'

    let scrollContainer = target;
        do { //find scroll container
            scrollContainer = scrollContainer.parentNode;
            if (!scrollContainer) return;
            scrollContainer.scrollTop += 1;
        } while (scrollContainer.scrollTop == 0);
    
        let targetY = 0;
        do { //find the top of target relatively to the container
            if (target == scrollContainer) break;
            targetY += target.offsetTop;
        } while (target = target.offsetParent);
    
        scroll = function(c, a, b, i) {
            i++; if (i > 30) return;
            c.scrollTop = a + (b - a) / 20 * i;
            setTimeout(function(){ scroll(c, a, b, i); }, 1);
        }
        // start scrolling
        scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
}

const travel = (target) =>{
    const homepageContainer = document.getElementById('homepage')
    homepageContainer.style.display = 'none'

    const serum = document.getElementById('game-blog')
    serum.style.display = 'none'

    const soap = document.getElementById('travel-blog')
    soap.style.display = 'block'

    let scrollContainer = target;
        do { //find scroll container
            scrollContainer = scrollContainer.parentNode;
            if (!scrollContainer) return;
            scrollContainer.scrollTop += 1;
        } while (scrollContainer.scrollTop == 0);
    
        let targetY = 0;
        do { //find the top of target relatively to the container
            if (target == scrollContainer) break;
            targetY += target.offsetTop;
        } while (target = target.offsetParent);
    
        scroll = function(c, a, b, i) {
            i++; if (i > 30) return;
            c.scrollTop = a + (b - a) / 30 * i;
            setTimeout(function(){ scroll(c, a, b, i); }, 1);
        }
        // start scrolling
        scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
}
