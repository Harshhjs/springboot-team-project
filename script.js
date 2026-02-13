function showSection(id) {
    document.getElementById("market").classList.add("hidden");
    document.getElementById("login").classList.add("hidden");
    document.getElementById(id).classList.remove("hidden");
}

function inquiry(crop) {
    alert("Inquiry sent for " + crop);
}

function login() {
    let email = document.getElementById("email").value;
    let pass = document.getElementById("password").value;

    if(email === "admin@agri.com" && pass === "admin") {
        alert("Admin Login Successful");
    } else {
        alert("Invalid Login");
    }
}
