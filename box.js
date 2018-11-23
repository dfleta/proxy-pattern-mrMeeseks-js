
/**
 * Clase Mr Meeseeks
 */

function MrMeeseeks() {
    this.message = "I'm Mr Meeseeks! Look at meeee!";
    // this.speak();
}

MrMeeseeks.prototype.speak = function() {
    console.log(this.message);
};

MrMeeseeks.prototype.formulateRequest = function(deseo, objeto) {
    this.accion = deseo(objeto);
};

MrMeeseeks.prototype.fulfillRequest = function() {
    console.log("Yes sireeee!!");
    console.log(this.accion() + " done!!");
};

MrMeeseeks.prototype.listenRequest = function(deseo, sobre) {
    let closure = function() {
                        let objeto = sobre;
                        function execute() {
                            return deseo + " " + objeto;
                        }
                        return execute;
                    };
    this.accion = closure(); 
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
 * clase Box
 */

function Box() {
    this.name = "Rick's box";
    this.mrMeeseeks = null;
}

Box.prototype.createMrMeeseeks = function() {
    if (! this.mrMeeseeks) {
        this.mrMeeseeks = singletonMrMeeseeks().get();
    }
    return Object.create(this.mrMeeseeks);
};

Box.prototype.pushButton = function(reality) {
    let mrMee = this.createMrMeeseeks();
    mrMee.speak();
    reality.push(mrMee);
};

Box.prototype.getProtoMeeseks = function() {
    return this.mrMeeseeks;
};

// singleton de Box
function getBox() {
    
    const boxInstance = new Box();

    return { 
        get :function get() {
            return boxInstance;
        }
    };
}


/**
 * Testing
 */


// node.js modules
exports.singletonBox = function() {
    return getBox();
};






