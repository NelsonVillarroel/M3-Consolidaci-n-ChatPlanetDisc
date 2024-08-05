
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
var list = document.getElementById('scroll1');
var chat = document.getElementById('chat');
var back = document.getElementById('return')
var first = document.getElementById('first');
var second = document.getElementById('second');
var redmsg = document.getElementById('redmsg');



// Functions click
function firstClick() {
    leftbar.style.display = 'none';
    list.style.display = 'none';
    chat.style.display = 'flex';
    back.style.display = 'flex';
}

function firstClickDesk() {
    leftbar.style.display = 'none';
    list.style.display = 'none';
    chat.style.display = 'flex';
    back.style.display = 'flex';
}

function secondClick() {
    leftbar.style.display = 'none';
    list.style.display = 'none';
    chat.style.display = 'flex';
    back.style.display = 'flex';
    redmsg.style.display ='none';

    // aqui en vez de hacer visible el chat, inyectar chat 2
}

function secondClickDesk() {
    
    redmsg.style.display ='none';

    // aqui inyectar el nuevo chat2
    
}

function backClick() {
    leftbar.style.display = 'flex';
    list.style.display = 'flex';
    chat.style.display = 'none';
    back.style.display = 'none';
}

//function movil
function actionMovil() {

    chat.style.display = 'none';
    back.style.display = 'none';

    first.addEventListener('click', firstClick);
    back.addEventListener('click', backClick);
    second.addEventListener('click', secondClick);

}

// function desktop
function actionDesktop() {

    leftbar.style.display = 'flex';
    list.style.display = 'flex';
    chat.style.display = 'flex';

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







