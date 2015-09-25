/*tdd*/
var input = 1000;
var output = 0;
for(var i=1; i<input; i++){
    if(i%3 == 0 || i%5 == 0){
        output += i;
    }
}

console.log(output);



