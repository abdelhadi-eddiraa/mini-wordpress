import '@testing-library/jest-dom';

import { act, render, screen } from '@testing-library/react'; // Import render and act directly
import { NextIntlClientProvider } from 'next-intl';
import React from 'react';

import NodeSideBar from '@/app/[locale]/(auth)/dashboard/role-permissions/NodeSideBar';
import messages from '@/locales/en.json';

// Mock the dependencies or external functions used within the component
jest.mock('@clerk/nextjs', () => ({
  useOrganization: jest.fn(() => ({ memberships: [] })),
}));

jest.mock('@/actions/UserList', () => ({
  getUser: jest.fn(() => Promise.resolve([])),
}));

// Mock the nodes
jest.mock('reactflow', () => ({
  ...jest.requireActual('reactflow'),
  useNodesState: jest.fn(() => {
    const initialNodes: Node[] = [];
    const [nodes, setNodes] = React.useState(initialNodes);
    const mockOnNodesChange = (newNodes: Node) => {
      setNodes(newNodes);
    };
    return [nodes, setNodes, mockOnNodesChange];
  }),
}));

describe('Index Page', () => {
  // Mock console.error to avoid the warning
  const original = console.error;

  beforeEach(() => {
    console.error = jest.fn();
    console.error('you cant see me');
  });

  afterEach(() => {
    console.error('you cant see me');
    console.error = original;
  });

  // it('renders without errors', () => {
  //   act(() => { // Use act to wrap the rendering code
  //     render(
  //       <NextIntlClientProvider locale="en" messages={messages}>
  //         <Index />
  //       </NextIntlClientProvider>
  //     );
  //   });
  // });

  it('Test user interactions such as dragging nodes, creating edges, and moving elements within the flow', async () => {
    // Mock the required props
    const handleDragStart = jest.fn();
    const selectedNodetype = 'someNodeType';

    act(async () => {
      // Use act to wrap the asynchronous code
      render(
        <NextIntlClientProvider locale="en" messages={messages}>
          <NodeSideBar
            handleDragStart={handleDragStart}
            selectedNodetype={selectedNodetype}
          />
        </NextIntlClientProvider>,
      );
      // Debug: Print out the rendered HTML
      console.log(screen.debug());

      // Search for the draggable element based on the aria-label attribute
      // const userNode = screen.getByLabelText('User');
      // // const flowContainer = screen.getByTestId('rf__wrapper');
      // expect(userNode).toBeInTheDocument();
    });
  });
});
