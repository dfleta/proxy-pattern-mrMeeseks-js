const { expect } = require('@jest/globals');
const factory = require('../mrMeeseeks');

test('creo la caja usando su factoria', () => {
    expect(factory.singleMrMeeseeks().get()).toBeTruthy;
  });