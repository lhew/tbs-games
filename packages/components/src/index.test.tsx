import React from 'react';
import TestRenderer from 'react-test-renderer'; // ES6
import { Button, FormField, Popup, Sidebar, Toaster } from '.';
test('Testing imports', () => {
  describe('Mounting a simple page with the components', () => {
    const defaultInput = TestRenderer.create(
      <div>
        <Sidebar>
          <h1>Test</h1>
        </Sidebar>
        <Button>a button</Button>
        <Popup>A popup example</Popup>
        <FormField name="foo" type="text" />
        <Toaster>Toaster</Toaster>
      </div>,
    );
    expect(defaultInput).toMatchSnapshot();
  });
});
