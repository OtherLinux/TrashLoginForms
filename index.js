document.addEventListener('DOMContentLoaded', () => {
    password = document.getElementById("password");
    label = document.getElementById("labelpasswordrepeat");
    passwordrepeat = document.getElementById("passwordrepeat");


    password.addEventListener('input', (e) => {
        if (password.value !== "") {
            label.classList.remove("HiddenPass");
            passwordrepeat.classList.remove("HiddenPass");
        } else if (password.value === "") {
            label.classList.add("HiddenPass");
            passwordrepeat.classList.add("HiddenPass");
        }
    })
    document.getElementById("LogInText").addEventListener("click", (e) => {
        alert("Sorry but this feature was not a part of the assignment");
    })
})

