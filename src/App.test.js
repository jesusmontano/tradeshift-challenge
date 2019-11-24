// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

import { isTriangle, hasAllPositiveSides, determineType } from './util/helpers';

describe('isTriangle', () => {
  it("Returns false when a side is equal to zero.", () => {
    const triangle = isTriangle(0, 1, 2)
    expect(triangle).toEqual(false)
  })

  it("Returns false when any side is less than zero.", () => {
    const triangle = isTriangle(-1, 1, 2)
    expect(triangle).toEqual(false)
  })

  it("Returns false when the sides violate the triangle inequality theorem.", () => {
    const triangle = isTriangle(1, 1, 1000);
    expect(triangle).toEqual(false)

    const triangle2 = isTriangle(1, 1, 2);
    expect(triangle2).toEqual(false)

    const triangle3 = isTriangle(1, 2, 3);
    expect(triangle3).toEqual(false);
  })

  it("Returns true when the sides form a valid triangle.", () => {
    const triangle = isTriangle(2, 2, 3);
    expect(triangle).toEqual(true)
  })

})

describe('determineType', () => {
  it("Returns not possible if the sides violate the triangle inequality theorem.", () => {
    const triangle = determineType(3, 4, 100);
    expect(triangle).toEqual('Not Possible');

    const triangle2 = determineType(1, 1, 2);
    expect(triangle2).toEqual('Not Possible')
  })

  it("Returns scelene if all sides of the triangle are unequal.", () => {
    const triangle = determineType(3, 4, 5);
    expect(triangle).toEqual('Scalene');
  })

  it("Returns isosceles if exactly 2 sides of the triangle are equal.", () => {
    const triangle = determineType(3, 3, 5);
    expect(triangle).toEqual('Isosceles');
  })

  it("Returns equilateral if all sides of the triangle are equal.", () => {
    const triangle = determineType(3, 3, 3);
    expect(triangle).toEqual('Equilateral');
  })

  it("Accurately handles decimals.", () => {
    const triangle = determineType(3.0, 3, 3.00000);
    expect(triangle).toEqual('Equilateral');

    const triangle2 = determineType(2.17, 2.17000, 3);
    expect(triangle2).toEqual('Isosceles');
  })
})