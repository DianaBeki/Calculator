let inputtext = document.getElementById("inputtext");

let calc = (number) => {
    inputtext.value += number;
}

let result = () => {
    try{
        inputtext.value = eval(inputtext.value)
    }
    catch(err){
        alert("Invalid output");
    }    
}

function clr(){
    inputtext.value = " ";
}

function del(){
    inputtext.value = inputtext.value.slice(0, -1);

}