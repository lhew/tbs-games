import React from 'react';
import TestRenderer from 'react-test-renderer'; // ES6
import Sidebar from '.';
import { StyledSidebar, SidebarBackdrop } from './styles';

test('Sidebar scenarios', () => {
  const defaultSidebar = TestRenderer.create(<Sidebar isOpen>Children item</Sidebar>);
  expect(defaultSidebar).toMatchSnapshot();

  const closedSidebar = TestRenderer.create(<Sidebar>Children item</Sidebar>);
  expect(closedSidebar).toMatchSnapshot();

  // Styled component testing
  const styledSidebar = TestRenderer.create(<StyledSidebar isOpen>Children item</StyledSidebar>);
  expect(styledSidebar).toMatchSnapshot();

  const closedStyledSidebar = TestRenderer.create(<StyledSidebar>Children item</StyledSidebar>);
  expect(closedStyledSidebar).toMatchSnapshot();

  //backdrop

  const opaqueBackdrop = TestRenderer.create(<SidebarBackdrop transparent={false}>Children item</SidebarBackdrop>);
  expect(opaqueBackdrop).toMatchSnapshot();

  const transparentBackdrop = TestRenderer.create(<SidebarBackdrop transparent>Children item</SidebarBackdrop>);
  expect(transparentBackdrop).toMatchSnapshot();

  const defaultBackdrop = TestRenderer.create(<SidebarBackdrop>Children item</SidebarBackdrop>);
  expect(defaultBackdrop).toMatchSnapshot();
});
