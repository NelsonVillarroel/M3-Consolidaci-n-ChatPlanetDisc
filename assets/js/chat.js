
// escuchar el evento de envío del formulario
document.getElementById('msgform').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevenir el comportamiento por defecto del formulario (recargar la página)

    // obtener el valor del campo de entrada
    const liveMsg = document.getElementById('liveMsg').value;

    // objeto time
    let time = new Date();

    // hours : minutes
    let hours = time.getHours();
    let minutes = time.getMinutes();

    //ponerle 0 a las horas y minutos menores que 10
    hours = hours < 10 ? `0${hours}` : hours;
    minutes = minutes < 10 ? `0${minutes}` : minutes;

    //setear el mensaje con hora
    let rightmsg = `
<p class="msg rightmsg"> ${liveMsg} <span class="time">${hours}:${minutes}</span></p>
`
    // obtener el contenedor de mensajes
    let chat_main = document.querySelector('.chat-main');


    //inyectar mensaje
    chat_main.insertAdjacentHTML('afterbegin', rightmsg);

    // limpiar la entrada después de enviar el mensaje
    document.getElementById('liveMsg').value = '';

})


//desktop movil mode
//vars
var leftbar = document.getElementById('leftbar');
var list = document.getElementById('contactlist');
var chat = document.getElementById('chat');
var back = document.getElementById('return')
var first = document.getElementById('first');
var second = document.getElementById('second');
var redmsg1 = document.getElementById('redmsg1');
var redmsg2 = document.getElementById('redmsg2');
var chatmain = document.getElementById('chatmain');
var img1 = document.getElementById('contact-img');
var containerimg = document.getElementById('containerimg');
var chatbar = document.getElementById('chatbar');
var startscreen= document.getElementById('startscreen');

// set img2 
var img1 =`

    <img class="contact-img" src="assets/img/user2.jpg" alt="">

`

// set img2 
var img2 =`

    <img class="contact-img" src="assets/img/user3.jpg" alt=""></img>

`

// set chat1
var chat1 = `
    
    <p class="msg leftmsg"> Gracias, que tengan linda tarde <span class="time">12:59</span></p>
    <p class="msg rightmsg"> Muy bien, aca lo recibimos encantados <span class="time">12:59</span></p>
    <p class="msg leftmsg"> El cliente dice que visitará la sucursal pasado el medio día<span class="time">12:59</span></p>
    <p class="msg leftmsg"> Muchaas gracias por la información <span class="time">12:59</span></p>
    <p class="msg rightmsg"> Sii, quedan 4 en stock <span class="time">12:58</span></p>
    <p class="msg rightmsg"> Voy a revisar en la bodega<span class="time">12:55</span></p>
    <p class="msg rightmsg"> Hola Tamara, buenos días para ti también, por favor dame un momentito<span class="time">12:55</span></p>
    <p class="msg leftmsg"> Necesito saber si en la sucursal de la florida tienen en stock el vinilo HeadHunters de Herbie Hancock <span class="time">12:55</span></p>
    <p class="msg leftmsg"> Soy Tamara de la sucursal de Puente Alto. <span class="time">12:55</span></p>
    <p class="msg leftmsg"> Hola, muy buenos días <span class="time">12:55</span></p>

`

// set chat2
var chat2 = `
    
    <p class="msg leftmsg"> Muchas gracias, me pasare durante el día por la tienda, agradezco la atención, nos vemoos!! <span class="time">12:25</span></p>
    <p class="msg rightmsg"> y el CD tiene el valor de 15.990 y el vinilo esta en oferta a 32.990 <span class="time">10:39</span></p>
    <p class="msg rightmsg"> hoy atendemos hasta las 18 horas<span class="time">10:38</span></p>
    <p class="msg leftmsg"> y que precios tiene el CD? <span class="time">10:15</span></p>
    <p class="msg leftmsg"> Super!! hasta que hora atienden? <span class="time">09:52</span></p>
    <p class="msg rightmsg"> Si amigo, lo tenemos, en formato CD y Vinilo <span class="time">09:45</span></p>
    <p class="msg leftmsg"> <img class="imgsend" src="assets/img/imgdisc.jpg" alt=""> <span class="time">09:42</span></p>
    <p class="msg leftmsg"> Lo he estado buscando en santiago pero no lo encuentro  <span class="time">09:42</span></p>
    <p class="msg leftmsg"> Queria saber si tienen este disco en la tienda de La Florida <span class="time">09:41</span></p>
    <p class="msg rightmsg"> Hola, muy buenos diás, sii en que puedo ayudarte? <span class="time">09:35</span></p>
    <p class="msg leftmsg"> Estan atendiendo a esta hora? <span class="time">09:31</span></p>
    <p class="msg leftmsg"> Hola buenos diás  <span class="time">09:31</span></p>

`


// container chat



// Functions click
function firstClick() {
    
    leftbar.style.display = 'none';
    list.style.display = 'none';
    chat.style.display = 'flex';
    back.style.display = 'flex';
    containerimg.style.display = 'flex';
    redmsg1.style.display = 'none';
    chatmain.style.display = 'flex';
    startscreen.style.display = 'none';
    chatbar.style.display = 'flex';
    
    chatmain.innerHTML = chat1;
    containerimg.innerHTML= img1;

}

function firstClickDesk() {

    chat.style.display = 'flex';
    redmsg1.style.display = 'none';
    chatmain.style.display = 'flex';
    startscreen.style.display = 'none';
    chatbar.style.display = 'flex';
    
    chatmain.innerHTML = chat1;
    containerimg.innerHTML= img1;
   
}

function secondClick() {
    leftbar.style.display = 'none';
    list.style.display = 'none';
    chat.style.display = 'flex';
    back.style.display = 'flex';
    redmsg2.style.display = 'none';
    containerimg.style.display= 'flex';
    chatbar.style.display = 'flex';
    chatmain.style.display = 'flex';
    startscreen.style.display = 'none';
    
    
    chatmain.innerHTML = chat2;
    containerimg.innerHTML= img2;

}

function secondClickDesk() {

    redmsg2.style.display = 'none';
    chat.style.display = 'flex';
    chatbar.style.display = 'flex';
    chatmain.style.display = 'flex';
    startscreen.style.display = 'none';

    chatmain.innerHTML = chat2; 
    containerimg.innerHTML= img2;
    

    

}

function backClick() {
    leftbar.style.display = 'flex';
    list.style.display = 'flex';
    chat.style.display = 'none';
    back.style.display = 'none';
    containerimg.style.display= 'none';
    
    
}

//function movil
function actionMovil() {

    chat.style.display = 'none';
    back.style.display = 'none';
    containerimg.style.display ='none';
    

    first.addEventListener('click', firstClick);
    back.addEventListener('click', backClick);
    second.addEventListener('click', secondClick);

}

// function desktop
function actionDesktop() {

    leftbar.style.display = 'flex';
    list.style.display = 'flex';
    chat.style.display = 'flex';
    containerimg.style.display ='flex';

    first.addEventListener('click', firstClickDesk);
    second.addEventListener('click', secondClickDesk);
    first.removeEventListener('click', firstClick);
    back.removeEventListener('click', backClick);
    second.removeEventListener('click', secondClick);

}

// function screen size
function screenSize() {

    if (window.matchMedia('(max-width: 768px)').matches) {

        actionMovil();

    } else {

        actionDesktop();

    }

}

// load and resize
window.addEventListener('load', screenSize);
window.addEventListener('resize', screenSize);







