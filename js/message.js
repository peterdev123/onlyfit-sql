function showMessage(message) {
    var inputErrorElement = document.getElementById('inputError');
    inputErrorElement.textContent = message;
    document.getElementById('inputError').style.backgroundColor = '#FF7F7F';
}

function showPopupMessage(message) {
    var popup = document.createElement('div');

    popup.style.position = 'fixed';
    popup.style.top = '50%';
    popup.style.left = '50%';
    popup.style.transform = 'translate(-50%, -50%)';
    popup.style.backgroundColor = '#59754f';
    popup.style.padding = '20px';
    popup.style.border = '2px solid #000000';
    popup.style.borderRadius = '5px';
    popup.style.boxShadow = '0px 0px 10px rgba(0, 0, 0, 0.5)';
    popup.style.zIndex = '9999';

    popup.innerHTML = '<p style="font-size: 25px; color: white;">' + message + '</p>';
    popup.innerHTML += '<a id="redirectButton" href="index.php" style="color: white; font-size: 20px; text-decoration: none; margin-top: 10px;">Back to main website</a>';

    document.body.appendChild(popup);
}

function showPopupMessage1(message) {
    var popup = document.createElement('div');

    popup.style.position = 'fixed';
    popup.style.top = '50%';
    popup.style.left = '50%';
    popup.style.transform = 'translate(-50%, -50%)';
    popup.style.backgroundColor = '#59754f';
    popup.style.padding = '20px';
    popup.style.border = '2px solid #000000';
    popup.style.borderRadius = '5px';
    popup.style.boxShadow = '0px 0px 10px rgba(0, 0, 0, 0.5)';
    popup.style.zIndex = '9999';

    popup.innerHTML = '<p style="font-size: 25px; color: white;">' + message + '</p>';
    popup.innerHTML += '<a id="redirectButton" href="login.php#LogCard" style="color: white; font-size: 20px; text-decoration: none; margin-top: 10px;">Log in now.</a>';

    document.body.appendChild(popup);
}
