let angle = 0;
let direction = 1;

const blog = () =>{
    const navPopup = document.getElementById('popup');
    navPopup.style.display = navPopup.style.display === "block" ? "none" : "block";

    const icon = document.getElementById('arrow')
    angle += 180 * direction;
    icon.style.transform = `rotate(${angle}deg)`;
    icon.style.transition = '0.5s';
    direction *= -1;
}
// document.addEventListener("DOMContentLoaded", () =>{
//     window.addEventListener("scroll", () =>{
//         let element = document.querySelector(".content1")
//         let position = element.getBoundingClientRect().top;
//         let windowHeight = window.innerHeight;

//         if(position <  windowHeight){
//             element.style.opacity = 1
//         }else{
//             element.style.opacity = 0
//         }
//     })
// })

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