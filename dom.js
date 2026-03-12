function result () {
    let input=document.getElementById("inputtext").value;
    Text
    let changecolor=document.getElementById("text");
    changecolor.style.color="red";
    let bodycolor=document.getElementById("body")[0];
    bodycolor.style.backgroundColor="blue";
}
let paragraph=document.getElementById("paratext");
function changetextcolor() {
    paragraph.style.backgroundColor="#"+Math.floor(Math.random()*16777215).toString(16);
}
paragraph.addEventListener("mouseover",changetextcolor);