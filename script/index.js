function mySlice() {
    let fruit = "apple, banana, orange";
    let part = fruit.slice(14, 21);
    document.getElementById('demo').innerHTML = part;
}



function mySubstring() {
    let text1 = "raunak";
    let text2 = "VISHWAKARMA";
    document.getElementById('demo').innerHTML = text1.toUpperCase() + text2.toLowerCase();
}
