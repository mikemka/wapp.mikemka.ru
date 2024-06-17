function addMessage(text, sendedFromUser, isNewMessage) {
    const newMessageBox = document.createElement("div");
    newMessageBox.classList.add('message');
    
    if (sendedFromUser) {
        newMessageBox.classList.add('out');
    } else {
        newMessageBox.classList.add('in');
    }
    
    const newMessage = document.createElement("div");
    const newContent = document.createTextNode(text);
    newMessage.appendChild(newContent);
    
    newMessageBox.appendChild(newMessage);
    
    const messagesDiv = document.getElementById('messages');
    if (isNewMessage) {
        messagesDiv.insertBefore(newMessageBox, messagesDiv.firstChild);
    } else {
        messagesDiv.appendChild(newMessageBox);
    }
}

function sendMessage() {
    const input = document.getElementById('message-input');
    const text = input.value;
    if (!text) {
        return
    }
    input.value = '';
    addMessage(text, true, true);
}

function loadOldMessages() {
    const oldMessages = [['тест соо 1', true], ['тест отв 1', false]];
    for (const message of oldMessages.reverse()) {
        addMessage(message[0], message[1], false)
    }
}

window.onload = loadOldMessages;

let tg = window.Telegram.WebApp;
tg.expand();
tg.MainButton.setText("Кнопка");
tg.MainButton.textColor = '#FFFFFF';
tg.MainButton.color = '#2cab37';
tg.MainButton.hide();
Telegram.WebApp.onEvent("mainButtonClicked", function(){
	tg.sendData('Нажата основная кнопка');
});
