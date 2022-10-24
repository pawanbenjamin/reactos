# REACTO Event Emitter

*Difficulty: Medium*

<a href="http://slides.com/katehumphrey/reacto-2#/">Slides</a> <br/>
<a href="https://repl.it/C7RD">repl.it</a>

---

Implement a familiar Javascript concept: the EventEmitter. It works like this:

You can create an EventEmitter:

```javascript
var myEventEmitter = new EventEmitter();
```

And you can register listeners to different event strings with an `on` method:

```javascript
myEventEmitter.on('anImportantEvent', function (eventData) {
  console.log('Something important just happened at ', eventData);
});
```

These listeners get called when the created event emitter `emit`s the event with related data:

```javascript
myEventEmitter.emit('anImportantEvent', { location: 'Fullstack' });
```

You can also unregister a listener using a `removeListener` method:

```javascript
function importantMessage (eventData) {
  console.log('Something important happened at ', eventData.location);
};

// Listener is attached.
myEventEmitter.on('anImportantEvent', importantMessage); 

// Listener is no longer attached and has moved on with its life.
myEventEmitter.removeListener('anImportantEvent', importantMessage);  
```

That's it, good luck!

## Overview of full functionality

```javascript
var superbowl = new EventEmitter();

var cheer = function (eventData) {
  console.log('RAAAAAHHHH!!!! Go ' + eventData.scoringTeam);
};

var jeer = function (eventData) {
  console.log('BOOOOOO ' + eventData.scoringTeam);
};

superbowl.on('touchdown', cheer);
superbowl.on('touchdown', jeer);

superbowl.emit('touchdown', { scoringTeam: 'Patriots' }); // Both cheer and jeer should have been called with data

superbowl.removeListener('touchdown', jeer);

superbowl.emit('touchdown', { scoringTeam: 'Seahawks' }); // Only cheer should have been called
```
