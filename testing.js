
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
console.log("\n ### Jerry press button ### \n");

box.pressButton(reality);
console.assert(reality.length == 1);

console.log("Rick: Open Jerry's stupid mayonnaise jar");
var lastMrMeeseeks = reality.length - 1;
reality[lastMrMeeseeks].makeRequest("open", "Jerry's stupid mayonnaise jar");
reality[lastMrMeeseeks].fulfillRequest();
// meeseeks deja de existir
reality.pop();
console.assert(reality.length == 0);

// Historia de usuario: Summer press button
console.log("\n ### Summer press button ### \n");

box.pressButton(reality);
console.assert(reality.length == 1);
console.log("Summer: I wanna be popular at school!");
reality[lastMrMeeseeks].makeRequest("be popular", "at school");
reality[lastMrMeeseeks].fulfillRequest();
reality.pop();
console.assert(reality.length == 0);

// // Historia de usuario: Beth press button
console.log("\n ### Beth press button ### \n");

box.pressButton(reality);
console.log("Beth: I wanna be a more complete woman!");
reality[lastMrMeeseeks].makeRequest("be a more complete", "woman");
reality[lastMrMeeseeks].fulfillRequest();
reality.pop();
console.assert(reality.length == 0);

// el prototipo no se ha visto alterado con accion
// proto.fulfillRequest();  => accion no definido


// // Historia de usuario: Jerry y su Mr Meeseeks press button
console.log("\n ### Jerry and Mr Meeseeks press button ### \n");

box.pressButton(reality);
console.assert(reality.length == 1);

console.log("Jerry: I would like to take two strokes off my golf game.");

reality[lastMrMeeseeks].makeRequest("take two strokes off", "my golf game");

// si cambiamos el "mensaje al crearse" del prototipo, 
// cambia el de todos los meeseeks
// proto.messageOnCreate = "Caaaaaan dooooooo!!";
Object.getPrototypeOf(reality[lastMrMeeseeks]).messageOnCreate = "Hi!!";

// Mr Meeseeks creando meeseeks
for(let i = 1; i <= 3; i++) {
    box.pressButton(reality);
    console.log("Mr Meeseeks: Could you help me get two strokes off Jerry's golf swim?");
    // si añadimos accion() con makeRequest, la creamos de manera local en el objeto
    // asi que aunque añadamos accion() mediante learnRequest en el prototipo
    // JS encontrara accion() de make en el espacio de nombres local
    // y no la accion() creada en el prototipo (precedencia resolucion nombres)
    // reality[i].makeRequest("take two strokes off", "my golf game");
}

console.assert(reality.length == 4);

// aprendiendo draw

// Array-Like Objects
var cazo = {};

Object.getPrototypeOf(reality[0]).learnRequest(
                                    function draw(objeto) {
                                        function execute() {
                                                objeto["bola"] = "";
                                                return "bola" in objeto? 
                                                            "That's a lower handycap stroke!!" :
                                                            "I wanna die!!!";
                                        }
                                        // la ejecucion de la accion se aplaza hasta que sea invocada
                                        return execute;
                                    },        
                                    cazo);

// todos los meeseeks menos uno dejan de existir
// selecciono todos los elementos del array menos el primero
// slice(start, end) => slice(1) => desde el segundo hasta el final
for(let i = 1; i < reality.length; i++) {
    reality[i].fulfillRequest();
}

let limite = reality.length;
for(let i = 1; i < limite; i++) {
    // el primer meeseeks creado por jerry es el que primero explota
    reality.shift();
}

console.assert(reality.length == 1);


// aprendiendo short game
console.log("\nMr Meeseeks with a knife: What about your short game?");

// Array-Like Objects
var taza = {};

reality[0].learnRequest(
                            function putt(objeto) {
                                function execute() {
                                        // notacion dot tambien funciona
                                        objeto.bola = "";
                                        return "onio" in objeto? 
                                                    "Ohh, nice!!" :
                                                    "Samantha is gona die!!!";
                                }
                                return execute;
                            },        
                            taza);

reality[lastMrMeeseeks].fulfillRequest();

reality.pop();
console.assert(reality.length == 0);


