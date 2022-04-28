var boxElement = document.querySelector('#box');
var button1Element = document.querySelector('#button1');
var button2Element = document.querySelector('#button2');
var button3Element = document.querySelector('#button3');
var button4Element = document.querySelector('#button4');


function changeSize (){
       boxElement.style.width = "200px";
       boxElement.style.height = "150px";
}

function changeColor (){
    console.log('here')
    boxElement.style.background = "blue";
}
   
function fade(){
    boxElement.style.opacity="50%"
}

function reset(){
    boxElement.style.background="orange";
    boxElement.style.width="150px";
    boxElement.style.height="150px";
}

button1Element.addEventListener("click", changeSize)
button2Element.addEventListener("click", changeColor)
button3Element.addEventListener("click", fade)
button4Element.addEventListener("click", reset)

///////
//document.getElementById("growBtn").addEventListener("click", function(){

   // document.getElementById("box").style.height = "250px";

//});

///document.getElementById("resetBtn").addEventListener("click", function(){

    ///document.getElementById("box").style.height = "150px";

//});


    // function changeColor (){
    //     document.querySelector('button3') #style.color="fade"
    // }
    // function changeSize () {
    //     document.querySelector('button4') #style.shape='normal'
    // }

// document.querySelector('#button1').addEventListener("click",changeSize)

