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