import React from 'react';
import TestRenderer from 'react-test-renderer'; // ES6
import Popup from '.';
import { Backdrop } from './styles';

test('Popup scenarios', () => {
  const deafultPopup = TestRenderer.create(
    <Popup transparent>
      <div style={{ width: '300px' }}>
        <h2>This is a popup</h2>
        <p>And this is a paragraph</p>
      </div>
    </Popup>,
  );

  const defaultPopupOpaque = TestRenderer.create(
    <Popup>
      <div style={{ width: '300px' }}>
        <h2>This is a opaque popup</h2>
        <p>And this is a paragraph</p>
      </div>
    </Popup>,
  );

  const backDropSnapshot = TestRenderer.create(<Backdrop>Test</Backdrop>);
  const backDropSnapshotOpaque = TestRenderer.create(<Backdrop transparent>Test</Backdrop>);

  expect(deafultPopup).toMatchSnapshot();
  expect(defaultPopupOpaque).toMatchSnapshot();
  expect(backDropSnapshot).toMatchSnapshot();
  expect(backDropSnapshotOpaque).toMatchSnapshot();
});
