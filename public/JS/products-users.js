//botones de la paginas de productos
const buttonAceptar=document.querySelectorAll(".card-Products__buttom--1");
const buttonLess=document.querySelectorAll(".card-Products__buttom-less");
const buttonPlus=document.querySelectorAll(".card-Products__buttom-plus");
const buttonNumber=document.querySelectorAll(".card-Products__buttom-number");
const button1=document.querySelectorAll(".card-Products__buttom--1");
const button2=document.querySelectorAll(".card-Products__buttom--2");
const carrito=document.getElementById("shopping-card-orden");

for(let x of button1){
    x.style.display="block";
}
for(let x of button2){
    x.style.display="none";
}

const ArrayButtonLess= [...buttonLess];
const ArrayButtonAceptar= [...buttonAceptar];
const ArrayButtonPlus= [...buttonPlus];
const ArrayButtonNumbe= [...buttonNumber];

document.addEventListener("click",function (e){
    const {target}=e;
    if(target.matches(".card-Products__buttom-less")) {
        const index = ArrayButtonLess.findIndex((el) => el === target);
        carrito.innerHTML= parseInt(carrito.innerHTML)-1;
        buttonNumber[index].innerHTML=parseInt(buttonNumber[index].innerHTML)-1;
        if(buttonNumber[index].innerHTML==0)
        {
            button2[index].style.display="none";
            button1[index].style.display="block";
        }
        console.log(carrito.innerHTML)
    }
    else if(target.matches(".card-Products__buttom--1")){
        const index = ArrayButtonAceptar.findIndex((el) => el === target);
        button2[index].style.display="grid";
        button1[index].style.display="none";
        carrito.innerHTML= parseInt(carrito.innerHTML)+1;
        buttonNumber[index].innerHTML=parseInt(buttonNumber[index].innerHTML)+1;
    }
    else if(target.matches(".card-Products__buttom-plus")){
        const index = ArrayButtonPlus.findIndex((el) => el === target);
        carrito.innerHTML= parseInt(carrito.innerHTML)+1;
        buttonNumber[index].innerHTML =parseInt(buttonNumber[index].innerText )+1;
    }
});
