
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






