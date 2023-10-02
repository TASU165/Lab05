function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username === "1234" && password === "1234") {
        document.getElementById("message").innerHTML = "Your username and password are correct! you are logged in.";
    } else {
        document.getElementById("message").innerHTML = "Your username or password is incorrect! please try again.";
    }
}