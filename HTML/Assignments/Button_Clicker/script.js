function logIn(element){
    if (element.innerText == "Log In"){
        element.innerText = "Log Out";
    }else{
        element.innerText = "Log In";
    }
}
var sum = 0;
var sum1 = 0;

function likes(element){
    sum++;
    alert("Ninja definition 1 was liked " + sum + " times");
    element.innerText = sum + " Likes";
}
function likesTwo(element){
    sum1++;
    alert("Ninja definition 2 was liked " + sum1 + " times");
    element.innerText = sum1 + " Likes";
}
function addDefinition(element){
    element.remove();
}