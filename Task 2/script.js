const fun1 = (x) => {
    document.getElementById("cal").innerHTML += x;
}
const fun2 = () => {
    var r = eval(document.getElementById("cal").innerHTML);
    document.getElementById("cal").innerHTML = r;
}
const fun3 = () => {
    document.getElementById("cal").innerHTML = "";
}