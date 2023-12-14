import Pizza from './../src/pizza.js';

describe('Pizza', () => {
  test('should create a pizza object with size and toppings', () => {
    const pizza = new Pizza('small', ['cheese', 'pepperoni']);
    expect(pizza.size).toEqual('small')
    expect(pizza.toppings).toEqual(['cheese', 'pepperoni'])
  })
})