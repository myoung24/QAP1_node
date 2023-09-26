var events = require("events");
var eventEmitter = new events.EventEmitter();

eventEmitter.on("emit", () => {
  console.log("Event triggered");
});

eventEmitter.emit("emit");
