
// node.js modules
var importaBox = require('./box');

var box = importaBox.singletonBox().get();
console.log(box.name);

var box2 = importaBox.singletonBox().get();
console.log(box2.name);

var mrMeeseeks = box.createMrMeeseeks();
console.log(mrMeeseeks.message);

var reality = [];
box.pushButton(reality);
console.log(reality.toString());


