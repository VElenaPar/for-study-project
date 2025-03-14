// Реализовать чат на основе эхо-сервера wss://echo-ws-service.herokuapp.com.
// Интерфейс состоит из input, куда вводится текст сообщения, и кнопки «Отправить».
// При клике на кнопку «Отправить» сообщение должно появляться в окне переписки.
// Эхо-сервер будет отвечать вам тем же сообщением, его также необходимо выводить в чат.
// Добавить в чат механизм отправки гео-локации.
// При клике на кнопку «Гео-локация» необходимо отправить данные серверу и 
// в чат вывести ссылку на https://www.openstreetmap.org/ с вашей гео-локацией. 
// Сообщение, которое отправит обратно эхо-сервер, не выводить.

const messagesContainer = document.getElementById('messages');
    const messageInput = document.getElementById('messageInput');
    const sendButton = document.getElementById('sendButton');
    const locationButton = document.getElementById('locationButton');

    const socket = new WebSocket('wss://echo-ws-service.herokuapp.com');

    socket.addEventListener('open', () => {
    console.log('Соединение установлено');
    });

    socket.addEventListener('message', (event) => {
    const message = event.data;

    if (!message.startsWith('https://www.openstreetmap.org')) {
        displayMessage(message, 'server');
    }
    });

    socket.addEventListener('error', (error) => {
    console.error('Ошибка:', error);
    });

    socket.addEventListener('close', () => {
    console.log('Соединение закрыто');
    });

    function displayMessage(message, sender) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', sender);
    messageElement.textContent = message;
    messagesContainer.appendChild(messageElement);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    sendButton.addEventListener('click', () => {
    const message = messageInput.value;
    if (message) {
        displayMessage(message, 'user');
        socket.send(message);
        messageInput.value = ''
    }
    });

    locationButton.addEventListener('click', () => {
    if (!navigator.geolocation) {
        alert('Гео-локация не поддерживается вашим браузером');
        return;
    }

    navigator.geolocation.getCurrentPosition(
        (position) => {
        const { latitude, longitude } = position.coords;
        const link = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
        displayMessage(link, 'user');
        socket.send(link); 
        },
        (error) => {
        alert('Не удалось получить вашу гео-локацию');
        console.error('Ошибка гео-локации:', error);
        }
    );
    });
