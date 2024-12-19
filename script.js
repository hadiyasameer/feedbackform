const form=document.getElementById("feedbackform");
form.addEventListener('submit', function validate(event) {
    event.preventDefault();

    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let feedback = document.getElementById("feedback");
    let nameValidate = document.getElementById("nameval");
    let emailValidate = document.getElementById("emailval");
    let fbValidate = document.getElementById("fbval");
    let thankstext = document.getElementById("thanks");

    let isValid=true;

    if (name.value.trim() === "") {
        nameValidate.textContent = "*Name is required";
        name.focus();
        return false;
    }
    else {
        nameValidate.textContent = "";
    }
    if (email.value.trim() === "") {
        emailValidate.textContent = "*Valid email is required!";
        email.focus();
        return false;
    }
    else {
        let emailRegex = /^[^@]+@[^@]+\.[^@]+$/
        if (!emailRegex.test(email.value.trim())) {
            emailvalidate.textContent = "*Valid email is required!";
            email.focus();
            return false;
        }
        else {
            emailValidate.textContent = "";
        }
    }


    if (feedback.value.trim() === "") {
        fbValidate.textContent = "Please enter your feedback!";
        name.focus();
        return false;
    }
    if(isValid) {
        fbValidate.textContent = "";
        thankstext.innerHTML = name.value + " Thank you for your feedback!";
        name.value = "";
        email.value = "";
        feedback.value = "";
    }
})