

const btn1=document.querySelector(".btn-1")
console.log(btn1);
btn1.addEventListener("click",()=>{
    window.scrollTo(0,0);
    btn1.style.backgroundColor="white";
    btn1.style.color="#a41034";
    btn2.style.backgroundColor="#a41034";
    btn2.style.color="white";
    btn3.style.backgroundColor="#a41034";
    btn3.style.color="white";
    
    })

const btn2=document.querySelector(".btn-2")
//console.log(btn2);
btn2.addEventListener("click",()=>{
    window.scrollTo(0,370);
    btn2.style.backgroundColor="white";
    btn2.style.color="#a41034";
    btn1.style.backgroundColor="#a41034";
    btn1.style.color="white";
    btn3.style.backgroundColor="#a41034";
    btn3.style.color="white";
    
})

const btn3=document.querySelector(".btn-3")
//console.log(btn3);
btn3.addEventListener("click",()=>{
    window.scrollTo(0,1440);
    btn3.style.backgroundColor="white";
    btn3.style.color="#a41034";
    btn2.style.backgroundColor="#a41034";
    btn2.style.color="white";
    btn1.style.backgroundColor="#a41034";
    btn1.style.color="white";
    
})