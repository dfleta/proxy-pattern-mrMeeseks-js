
// node.js modules
var importaBox = require('./box');

// creamos dos cajas: es la misma por singleton
var factoriaBox = importaBox.singletonBox();
var box = factoriaBox.get();
console.log(box.name);

var box2 = factoriaBox.get();
console.log(box2.name);

//  las cajas son la misma
console.assert(box === box2);
box2.name = "Jen's box";
console.log(box.name);


// creamos dos Meeseeks
// los Meeseeks son distintos
// el prototipo no cambia
var mrMeeseeks = box.createMrMeeseeks();
// console.log(mrMeeseeks.speak());

var mrMeeseeks2 = box.createMrMeeseeks();
mrMeeseeks2.message = "el segundo";
// console.log(mrMeeseeks.speak());
console.assert(mrMeeseeks !== mrMeeseeks2);
console.assert(mrMeeseeks.message != mrMeeseeks2.message);

var proto = box.getProtoMeeseks();
console.assert(proto.messageOnCreate == "I'm Mr Meeseeks! Look at meeee!");

// creamos Mr Meeseeks con la caja
var reality = [];

box.pressButton(reality);
console.assert(reality.length == 1);
console.log("Rick: Open Jerry's stupid mayonnaise jar");
var lastMrMeeseeks = reality.length - 1;
reality[lastMrMeeseeks].makeRequest("open", "Jerry's stupid mayonnaise jar");
reality[lastMrMeeseeks].fulfillRequest();
reality.pop();
console.assert(reality.length == 0);

// si cambiamos el mensaje al crearse del prototipo, cambian todos los meeseeks
proto.messageOnCreate = "Caaaaaan dooooooo!!";

box.pressButton(reality);
console.assert(reality.length == 1);
console.log("Summer: I wanna be popular at school!");
reality[lastMrMeeseeks].makeRequest("be_popular", "at school");
reality[lastMrMeeseeks].fulfillRequest();
reality.pop();
console.assert(reality.length == 0);


box.pressButton(reality);
console.log("Beth: I wanna be a more complete woman!");
reality[lastMrMeeseeks].makeRequest("be_a_more_complete", "woman");
reality[lastMrMeeseeks].fulfillRequest();
reality.pop();
console.assert(reality.length == 0);

// el prototipo no se ha visto alterado con accion
// proto.fulfillRequest();  => accion no definido

/*
for(let mrMee in reality) {
    reality[mrMee].speak();
}*/






