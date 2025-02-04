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
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>YIPPPEEEEEEEEE!!!! LES GOOOOO B) </title>
    <link rel="stylesheet" href="./yes_style.css">
</head>
<body>
    <div class="container">
        <h1 class="header_text">YIPPPEEEEEEEEE!!!! LES GOOOOO B) </h1>
        <div class="gif_container">
            <img src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExYnY1YmltbWVtZHVjNmN5azZxNjBuNmo1bzl6ODZmZXZxY3k2NTByaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/bMJqfOtgVEyI2PLnaW/giphy.gif">
        </div>
    </div>
</body>
</html>
}
