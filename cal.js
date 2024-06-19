function fn0(){
    let prev = document.getElementById("ans").innerHTML;
    document.getElementById("ans").innerHTML = prev + 0; 
}

function fn00(){
    let prev = document.getElementById("ans").innerHTML;
    document.getElementById("ans").innerHTML = prev + 0 + 0; 
}

function fn1(){
    let prev = document.getElementById("ans").innerHTML;
    document.getElementById("ans").innerHTML = prev + 1; 
}

function fn2(){
    let prev = document.getElementById("ans").innerHTML;
    document.getElementById("ans").innerHTML = prev + 2; 
}

function fn3(){
    let prev = document.getElementById("ans").innerHTML;
    document.getElementById("ans").innerHTML = prev + 3; 
}

function fn4(){
    let prev = document.getElementById("ans").innerHTML;
    document.getElementById("ans").innerHTML = prev + 4; 
}

function fn5(){
    let prev = document.getElementById("ans").innerHTML;
    document.getElementById("ans").innerHTML = prev + 5; 
}

function fn6(){
    let prev = document.getElementById("ans").innerHTML;
    document.getElementById("ans").innerHTML = prev + 6; 
}

function fn7(){
    let prev = document.getElementById("ans").innerHTML;
    document.getElementById("ans").innerHTML = prev + 7; 
}

function fn8(){
    let prev = document.getElementById("ans").innerHTML;
    document.getElementById("ans").innerHTML = prev + 8;

}

function fn9(){
    let prev = document.getElementById("ans").innerHTML;
    document.getElementById("ans").innerHTML = prev + 9; 
}

function fnC(){
    let prev = document.getElementById("ans").innerHTML;
    let erPre = prev.slice(0, -1);
    document.getElementById("ans").innerHTML = erPre; 
}

let op;
let firstVal;

function fnAc(){
    document.getElementById("ans").innerHTML = 0;
    op = 0;
    firstVal = 0;
    secondVal = 0;
}

function fnAD() {
    firstVal = document.getElementById("ans").innerHTML;
    document.getElementById("ans").innerHTML = 0;
    op = 1;
}

function fnDv() {
    firstVal = document.getElementById("ans").innerHTML;
    document.getElementById("ans").innerHTML = 0;
    op = 2;
}

function fnSU() {
    firstVal = document.getElementById("ans").innerHTML;
    document.getElementById("ans").innerHTML = 0;
    op = 3;
}

function fnMu() {
    firstVal = document.getElementById("ans").innerHTML;
    document.getElementById("ans").innerHTML = 0;
    op = 4;
}

function fnM() {
    firstVal = document.getElementById("ans").innerHTML;
    document.getElementById("ans").innerHTML = 0;
    op = 5;
}

function fnE() {
    let secondVal = document.getElementById("ans").innerHTML;
    
    if(op == 1) {
        document.getElementById("ans").innerHTML = parseInt(firstVal) + parseInt(secondVal);
    }
    else if(op == 2) {
        document.getElementById("ans").innerHTML = parseInt(firstVal) / parseInt(secondVal);
    }
    else if(op == 3) {
        document.getElementById("ans").innerHTML = parseInt(firstVal) - parseInt(secondVal);
    }
    else if(op == 4) {
        document.getElementById("ans").innerHTML = parseInt(firstVal) * parseInt(secondVal);
    }
    else if(op == 5) {
        document.getElementById("ans").innerHTML = parseInt(firstVal) % parseInt(secondVal);
    }
}