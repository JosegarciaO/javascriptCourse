let input = document.querySelector('[name=user]');//referencia
let age = document.querySelector('[name=age]');
let country = document.querySelector('#country');
let school = document.querySelector('input.school');
let gender = document.querySelector('input#gender')     ;
let email = document.querySelector('email');//referencia 
let btn = document.querySelector('button');
let mensaje = document.querySelector('p#mensaje');
let msg='';


//mensaje

btn.addEventListener("click",function(){
    msg = "Hola bienvenidos "+(gender.value=="Hombre"?"Sr.":"Srita")+" "+input.value;
    msg  +="\r"+" Contamos con la siguiente informacion: ";
    msg +="\r"+"tiene "+age.value+" años ";
    msg += "\r"+" estudío en la escuela "+school.value+" ubicada en "+country.value+".";
    mensaje.textContent = msg;
})

