
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
    chat_main.innerHTML += rightmsg;

    // limpiar la entrada después de enviar el mensaje
    document.getElementById('liveMsg').value = '';

})



//vars
var list = document.getElementById('scroll1');
var chat = document.getElementById('chat');
var back = document.getElementById('return')
var contact = document.getElementById('first');



//function movil
function actionMovil() {

    if (chat) {
        chat.style.display = 'none';
    }


    if (contact, list, back) {
        contact.addEventListener('click', function () {
            if (chat) {
                chat.style.display = 'flex';
                list.style.display = 'none';
            }
        })
        back.addEventListener('click', function () {
            if (list) {
                list.style.display = 'flex';
                chat.style.display = 'none';
            }
        })
    };
}


// function desktop
function actionDesktop() {

    chat.style.display = 'flex';
    list.style.display = 'flex';
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




