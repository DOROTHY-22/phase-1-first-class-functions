function receivesAFunction(callback) {
    callback();
}
function returnsANamedFunction(){
    const anotherFunction = function() {
        return `This is another function`;
    }
    return anotherFunction;
}
function returnsAnAnonymousFunction(){
    return function() {
        return `This too is javascript!`;
    };
    
}

