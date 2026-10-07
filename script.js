const signupForm = document.getElementById("signupForm");

const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");

const passwordToggle = document.getElementById("passwordToggle");

const terms = document.getElementById("terms");
const createAccount = document.getElementById("createAccount");

const loginTab = document.getElementById("loginTab");
const signupTab = document.getElementById("signupTab");

const loginLink = document.getElementById("loginLink");



passwordToggle.addEventListener("click", function () {

    if (password.type === "password") {

        password.type = "text";
        passwordToggle.textContent = "◉";

    } else {

        password.type = "password";
        passwordToggle.textContent = "◉";

    }

});




function checkForm() {

    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const email = document.getElementById("email").value.trim();

    if (
        firstName !== "" &&
        lastName !== "" &&
        email !== "" &&
        password.value !== "" &&
        confirmPassword.value !== "" &&
        terms.checked
    ) {

        createAccount.classList.add("enabled");

    } else {

        createAccount.classList.remove("enabled");

    }

}


signupForm.addEventListener("input", checkForm);
terms.addEventListener("change", checkForm);



signupForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const email = document.getElementById("email").value.trim();


    if (!firstName || !lastName || !email) {

        alert("Please fill in all required fields.");
        return;

    }


    if (password.value !== confirmPassword.value) {

        confirmPassword.classList.add("error");

        alert("Passwords do not match.");

        return;

    }


    if (!terms.checked) {

        alert("Please agree to the Terms & Conditions.");

        return;

    }


    confirmPassword.classList.remove("error");

    alert("Account created successfully!");

});


loginTab.addEventListener("click", function () {

    loginTab.classList.add("active");
    signupTab.classList.remove("active");

    alert("Login page interaction");

});




signupTab.addEventListener("click", function () {

    signupTab.classList.add("active");
    loginTab.classList.remove("active");

});




loginLink.addEventListener("click", function (event) {

    event.preventDefault();

    loginTab.click();

});