/**
 * Clase Mr Meeseeks
 * 
 * Las historias de usuario a programar
 * se encuentran aqui: 
 * https://www.youtube.com/watch?v=qUYvIAP3qQk
 */


function MrMeeseeks() {
    this.messageOnCreate = "I'm Mr Meeseeks! Look at meeee!";
    this.messageOnRequest = ["Oooh yeah! Can do!", 
                             "Yes sireee!" , 
                             "Oh, yeah!, Yes, ma'am!"];
}

MrMeeseeks.prototype.speakOnCreate = function() {
    console.log(this.messageOnCreate);
};

MrMeeseeks.prototype.speakOnRequest = function() {
    console.log(this.messageOnRequest[Math.floor(Math.random() * this.messageOnRequest.length)]);
};

MrMeeseeks.prototype.makeRequest = function(deseo, objeto) {
    let closure = function(cosa) {
        function execute() {
            return deseo + " " + cosa;
        }
        return execute;
    };
    this.accion = closure(objeto);
    this.speakOnRequest();
};

MrMeeseeks.prototype.fulfillRequest = function() {
    console.log(this.accion() + " All done!!");
};

MrMeeseeks.prototype.learnRequest = function(deseo, objeto) {
    this.accion = deseo(objeto);
};


// singleton de MrMeeseeks
function singletonMrMeeseeks() {

    const prototipo = new MrMeeseeks();

    return {
        get: function() {
            return prototipo;
        }
    };
}


/**
 * Testing e importacion del singleton
 * de la clase MrMeeseeks
 */

// node.js modules
exports.singleMrMeeseeks = function() {
    return singletonMrMeeseeks();
};
