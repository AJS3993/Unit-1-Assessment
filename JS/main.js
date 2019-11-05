var plusBtn = document.getElementById('plus');
var minusBtn = document.getElementById('minus');

var inp = document.querySelector('#input');

var sum = document.querySelector('#sum')

plusBtn.addEventListener('click', add)
minusBtn.addEventListener('click', minus)


var total = 0

sum.textContent = total

inp.value =1

function add(){
   var inpVal1 = inp.value
    var addNum = parseInt(inpVal1, 10)
    total += addNum
    sum.textContent = total
    colorChange()
}


function minus(){
    var inpVal2 = inp.value
     var minusNum = parseInt(inpVal2, 10)
     total -= minusNum
     sum.textContent = total
    colorChange()
    }
 
function colorChange(){
if (total < 0){
    document.getElementById('sum').style.color = "red"
}
else{
    document.getElementById('sum').style.color = "green"
}
}