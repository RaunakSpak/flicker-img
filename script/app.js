
// if else
function myButton() {
    let age = prompt("Please enter your age:");
    age = parseInt(age);
    
    let message;
    
    if (isNaN(age)) {
        message = "Please enter a valid number";
    } else if (age >= 18) {
        message = "Adult";
    } else if (age > 12) {
        message = "Teen";
    } else {
        message = "Child";
    }
    
    document.getElementById("demo").innerHTML = message;
}



// switch case
function myButton() {
    let age = prompt("Please enter your age:");
    age = parseInt(age);
    
    let message;
    
    switch (true) {
        case isNaN(age):
            message = "Please enter a valid number";
            break;
        case age >= 18:
            message = "Adult";
            break;
        case age > 12:
            message = "Teen";
            break;
        default:
            message = "Child";
    }
    
    document.getElementById("demo").innerHTML = message;
}

