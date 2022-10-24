var EventEmitter = function () {
    this.events = {};
};

EventEmitter.prototype.on = function (eventStr, fn) {
    //if there is no eventStr already existing, initialize it
    if (!this.events[eventStr]) { this.events[eventStr] = []; }

    this.events[eventStr].push(fn);
};

EventEmitter.prototype.emit = function (eventStr, eventData) {
    //check that this event exists
    if (!this.events[eventStr]) { return; }
    
    //call each function in the eventStr array
    this.events[eventStr].forEach(fn => fn(eventData));
};

EventEmitter.prototype.removeListener = function (eventStr, fn) {
    var eventFns = this.events[eventStr];
    //check that this event exists
    if (!eventFns) return;

    var i = eventFns.indexOf(fn);
    //check that this function exists
    if (i === -1) return;
    
    eventFns.splice(i, 1);
};
