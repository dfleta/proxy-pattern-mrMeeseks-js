
/**
 * Las historias de usuario a programar
 * se encuentran aqui:
 * https://www.youtube.com/watch?v=qUYvIAP3qQk
 */

// node.js modules
var importaBox = require('./box');

// creamos dos cajas: es la misma por singleton
var factoriaBox = importaBox.singletonBox();
var box = factoriaBox.getBox();
console.log(box.name);

var box2 = factoriaBox.getBox();
console.log(box2.name);

//  las cajas son la misma
console.assert(box === box2);
box2.name = "Jen's box";
console.log(box.name);


// creamos dos Meeseeks
// los Meeseeks son distintos
// el prototipo no cambia
var mrMeeseeks = box.createMrMeeseeks();

var mrMeeseeks2 = box.createMrMeeseeks();
mrMeeseeks2.messageOnCreate = "Caaaan dooooo!!";

console.assert(mrMeeseeks !== mrMeeseeks2);
console.assert(mrMeeseeks.messageOnCreate != mrMeeseeks2.messageOnCreate);

var proto = box.getProtoMeeseks();
console.assert(proto.messageOnCreate == "I'm Mr Meeseeks! Look at meeee!");
console.assert(proto != mrMeeseeks);

// creamos Mr Meeseeks con la caja
// Los meeseeks se añaden a un array 
// para practicar este tipo de estructura
var reality = [];

// Historia de usuario: Jerry press button

box.pressButton(reality);
console.assert(reality.length == 1);

console.log("Rick: Open Jerry's stupid mayonnaise jar");
var lastMrMeeseeks = reality.length - 1;
reality[lastMrMeeseeks].makeRequest("open", "Jerry's stupid mayonnaise jar");
reality[lastMrMeeseeks].fulfillRequest();
// meeseeks deja de existir
reality.pop();
console.assert(reality.length == 0);

// si cambiamos el "mensaje al crearse" del prototipo, 
// cambia el de todos los meeseeks
proto.messageOnCreate = "Caaaaaan dooooooo!!";

// // Historia de usuario: Summer press button

box.pressButton(reality);
console.assert(reality.length == 1);
console.log("Summer: I wanna be popular at school!");
reality[lastMrMeeseeks].makeRequest("be_popular", "at school");
reality[lastMrMeeseeks].fulfillRequest();
reality.pop();
console.assert(reality.length == 0);

// // Historia de usuario: Beth press button

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






