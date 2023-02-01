console.log('hello world');

function remove(element) {
    console.log(element);
    element.remove();
}

function loading() {
    alert("Ninja was liked")
}

function loginpressed (element) {
    console.log(element.innerText);
    if (element.innerText === "Login") {
        element.innerText = "Logout"
    }
    else {
        element.innerText = "Login" 
    }
}
