//Helper functions
const logToConsoleOn = false;
const logSeparator = '=========================================='; 
const logToConsole = function(string) {
    if (logToConsoleOn)
        console.log(string);
}
     
// swap  each item in array with item: on random index  
Array.prototype.randomize = function() {
    for (var i = 0; i < this.length; i++){
        var a = this[i];
        var b = Math.floor(Math.random() * this.length);
        this[i] = this[b];
        this[b] = a;
    }
    return this;
}