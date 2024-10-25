let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .navbar');
const submit = document.querySelector('#submit')

menu.onclick = () =>{
   menu.classList.toggle('fa-times');
   navbar.classList.toggle('active');
};

window.onscroll = () =>{
   menu.classList.remove('fa-times');
   navbar.classList.remove('active');
};
var swiper = new Swiper(".home-slider", {
   loop:true,
   navigation: {
     nextEl: ".swiper-button-next",
     prevEl: ".swiper-button-prev",
   },
});


let loadMoreBtn = document.querySelector('.packages .load-more .btn');
let currentItem = 4;

loadMoreBtn.onclick = () =>{
   let boxes = [...document.querySelectorAll('.packages .box-container .box')];
   for (var i = currentItem; i < currentItem + 4; i++){
      boxes[i].style.display = 'inline-block';
   };
   currentItem += 4;
   if(currentItem >= boxes.length){
      loadMoreBtn.style.display = 'none';
   }
}
const saveuser =   async () =>{

   let uname  = document.getElementById("uname").value
   let uemail  = document.getElementById("uemail").value
   let uph  = document.getElementById("uphone").value
   let uadd  = document.getElementById("uadd").value
   let uloc  = document.getElementById("uloc").value
   // let umem  = document.getElementById("umem").value
   let uarr  = document.getElementById("uarr").value
   let ulev  = document.getElementById("ulev").value


   let response = await fetch('http://localhost:8080/user',{
      method: 'POST',
      headers:{
         'Accept': 'application/json',
         'Content-Type': 'application/json'
      },
      body: JSON.stringify({
         nm: uname,
         em: uemail,
         ph: uph,
         ad: uadd,
         loc: uloc,
         // mem: umem,
         arr: uarr,
         lev: ulev
      })
   })
   console.log(response);
}





submit.addEventListener('click', saveuser);