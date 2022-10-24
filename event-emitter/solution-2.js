var EventEmitter = function(){
    this.events = {}
}

EventEmitter.prototype.on = function(eventStr,fn){
    if (!this.events[eventStr]) this.events[eventStr] = []
    this.events[eventStr].push(fn)
}

//single argument emitter
EventEmitter.prototype.emitSimple = function(eventStr,eventData){
    if (!this.events[eventStr]) { this.events[eventStr] = []; }
    this.events[eventStr].forEach(function(fn){
        fn(eventData)
    });
}

//multiple arguments emitter
EventEmitter.prototype.emit = function(eventStr, eventData){
    if (!this.events[eventStr]) { this.events[eventStr] = []; }
    var args = Array.prototype.slice.call(arguments,1,arguments.length)
    this.events[eventStr].forEach(function giveArguments(fn){
        fn.apply(null,args)
    });
}

//multiple arguments emitter, ES6
EventEmitter.prototype.emitBetter = function(eventStr, ...eventData){
    if (!this.events[eventStr]) return;
    this.events[eventStr].forEach(function giveArguments(fn){
        fn.apply(null,eventData)
    });
}

EventEmitter.prototype.removeListener = function(eventStr,fn){
    if (!this.events[eventStr]) return;
    var idxToRemove = this.events[eventStr].indexOf(fn);
    if (idxToRemove === -1) return;
    this.events[eventStr].splice(idxToRemove,1)
}
