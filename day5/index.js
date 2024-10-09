function validate(){
    let name = document.getElementById("login").value;
    let pass = document.getElementById("pass").value;
    let p1 = document.getElementById('result');
    
    if (name === "admin" && pass === "admin") {
        p1.innerText = "Login successful";
    } else {
        p1.innerText = "Login failed";
        return false;
    }
}
