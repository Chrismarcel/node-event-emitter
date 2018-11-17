const Emitter = require("./Emitter");

const emtr = new Emitter();

emtr.on("file", function() {
  console.log("File Opened");
});

emtr.on("file", function() {
  console.log("Data was written into file");
});

emtr.on("file", function() {
  console.log("File Closed");
});

emtr.emit("file");
