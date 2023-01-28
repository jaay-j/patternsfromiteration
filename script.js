var x = 10;
var y = x + 10;

var z = true;
var thing = '';
var tada;
tada = undefined;

function first(){
    x + y + thing; // bad form, operates on data outside of itself
    // var firstFunctionThing = true;
    // return undefined; // default behaviour
    return x + y + thing;
}

var result = first();

console.log(result);

function second(thing1, thing2){
    return thing1 + thing2;
}

var result2 = second(1,1);
console.log(result2);
result = second(20,10);

////////

// control structures

if(4 == "4"){ /// === means equals !== means not equals boolean operators
    console.log("yo");
}else{
    console.log("yogurt");
}

for(var i = 0; i < 100; i++){
    console.log(i);
}