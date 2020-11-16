
const { expect } = require('@jest/globals');
const factory = require('../src/box');

test('creo la caja usando su factoria', () => {
    expect(factory.singletonBox.getBox().name).toBe("Rick's box");
  });

test('factoria devuelve siempre la misma caja', () => {
    let box_primer = factory.singletonBox.getBox();
    let box_post = factory.singletonBox.getBox();
    expect(box_primer === box_post).toBe(true);
      
    function Box() {
        this.name = "Rick's box";
        this.mrMeeseeks = null;
    }
    let box_mocked = new Box();
    expect(box_primer === box_mocked).toBe(false);

    box_post.name = "Jen's box";
    expect(box_primer.name).toBe("Jen's box");
  });

/*
 * creamos dos Meeseeks
 * los Meeseeks son distintos
 * el prototipo no cambia
 * */



