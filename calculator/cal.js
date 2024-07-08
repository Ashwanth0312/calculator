let outputScreen = document.getElementById("cal");

function display(num){
    outputScreen.value +=num;
}
function calculate(){
    try{
        outputScreen.value =eval(outputScreen.value);

    }
    catch(err){
       alert("invalid");
    }
}
function reset(){
    outputScreen.value = "";
}
function del(){
    outputScreen.value = " ";
}
