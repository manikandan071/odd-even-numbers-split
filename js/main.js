let oddBtn=document.getElementById("odd");
let evenBtn=document.getElementById("even");


var numbers=[2,7,5,8,4,10,15,19,22,37,59,25];


oddBtn.addEventListener("click", function(){
    function oddFunction(values){
        return values%2 != 0;
    }
    
    let oddNum=numbers.filter(oddFunction);
    
    console.log(oddNum);
})


evenBtn.addEventListener("click",function(){
    function evenFunction(values){
        return values%2 == 0;
    }
    
    let evenNum=numbers.filter(evenFunction);
    
    console.log(evenNum);
})

