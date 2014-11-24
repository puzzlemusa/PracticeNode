function hello(){
    return "World";
}

function helloWorld(){
    return hello() + ' World';
}

function myPrivateFn(number){
    return number + 1;
}

function increment(number){
    return myPrivateFn(number);
}

module.exports.hello = hello;
module.exports.helloWorld = helloWorld;
module.exports.increment = increment;