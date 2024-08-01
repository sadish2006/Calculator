const  display=document.getElementById("display");



function appendTodisplay(Input){
    display.value +=Input;

}

function cleardisplay(){
    display.value="";
}
function calculate(){
display.value=eval(display.value);
}


