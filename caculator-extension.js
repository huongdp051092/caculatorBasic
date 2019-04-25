function display(x) {
        document.getElementById("display").value = document.getElementById("display").value + x;
}
function result() {
    let result;
    result = document.getElementById("display").value;
    document.getElementById("display").value = eval(result);
}
function AC() {
    document.getElementById("display").value = "";
}
