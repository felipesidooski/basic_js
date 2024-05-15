//Funcao responsavel apenas por apresentar a mensagem de registro
function register_js(){
    let email = document.getElementById("input_email");
    let passwd = document.getElementById("input_password");
    if (!validateEmail(email.value)) {
        message("Sorry, but the email provided is incorrect.", "red");
    } else {
        message("Thanks for your register " + email.value + "!", "#3E1992");
    }
    email.value = "";
    passwd.value = "";
}

//Regex to validated input
function validateEmail(email) {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
}

//Function to present a message to the user
function message(text_message, color){
    const message_screen = document.getElementById('message');
    const existingH3 = message_screen.querySelector('h3');
    if (!existingH3){
        const newH3 = document.createElement('h3');
        newH3.textContent = text_message;
        newH3.style.color = color;
        message_screen.appendChild(newH3);
    }else{
        existingH3.textContent = text_message;
        existingH3.style.color = color;
    }
}
