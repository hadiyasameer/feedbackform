 function validate(event) {
    event.preventDefault();

    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let feedback = document.getElementById("feedback");
    let nameValidate = document.getElementById("nameval");
    let emailValidate = document.getElementById("emailval");
    let fbValidate = document.getElementById("fbval");
    let thankstext = document.getElementById("thanks");

    if (name.value == "") {
        nameValidate.textContent = "*Name is required";
        name.focus();
        return false;
    }
    else {
        nameValidate.textContent = "";
    }
    if (email.value == "") {
        emailValidate.textContent = "*Valid email is required!";
        email.focus();
        return false;
    }
    else {
        let emailRegex = /^[^@]+@[^@]+\.[^@]+$/
        if (!emailRegex.test(email.value)) {
            emailvalidate.textContent = "*Valid email is required!";
            email.focus();
            return false;
        }
        else {
            emailValidate.textContent = "";
        }
    }


    if (feedback.value == "") {
        fbValidate.textContent = "Please enter your feedback!";
        name.focus();
        return false;
    }
    else {
        const button = document.getElementById('fbbutton');
        button.addEventListener('click', function () {
            fbValidate.textContent = "";
            thankstext.innerHTML = name.value+" Thank you for your feedback!";
            name.value = "";
            email.value = "";
            feedback.value = "";
        })
    }

}