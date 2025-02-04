const messages = [
    "erm what",
    "why are you saying no",
    "i'm gonna block you",
    "bruh r we deaduzz rn",
    "ts pmo </3",
    "stop clicking no",
    "PLEASE PLEASE PLEASE PLEASE",
    "stfu and click yes u paki",
    "ykw die",
    "veiny ahh pig dihh to ur mouth, click yes",
    "ur going to hell u js ate pig dick",
];

let messageIndex = 0;

function handlenawClick() {
    const nawButton = document.querySelector('.naw-button');
    const YAZZButton = document.querySelector('.YAZZ-button');
    nawButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(YAZZButton).fontSize);
    YAZZButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYAZZClick() {
    window.location.href = "yes_page.html";
}
