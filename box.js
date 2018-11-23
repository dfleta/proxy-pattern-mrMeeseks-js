
/**
 * Clase Mr Meeseeks
 * 
 * https://www.youtube.com/watch?v=qUYvIAP3qQk
 */

function MrMeeseeks() {
    this.messageOnCreate = "I'm Mr Meeseeks! Look at meeee!";
    // this.speak();
    this.messageOnRequest = ["Oooh yeah! Can do!", 
                             "Yes sireee!" , 
                             "Oh, yeah!, Yes, ma'am!"];

}

MrMeeseeks.prototype.speak = function() {
    console.log(this.messageOnCreate);
};

MrMeeseeks.prototype.speakOnRequest = function() {
    console.log(this.messageOnRequest[Math.floor(Math.random() * this.messageOnRequest.length)]);
}

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

Box.prototype.pressButton = function(reality) {
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






