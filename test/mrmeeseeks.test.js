const { expect } = require('@jest/globals');

// mrmeeseks configurado como paquete
const factory = require('../src/mrmeeseeks');

test('creo la caja usando su factoria', () => {
    expect(factory.singleMrMeeseeks().get()).toBeTruthy;
  });