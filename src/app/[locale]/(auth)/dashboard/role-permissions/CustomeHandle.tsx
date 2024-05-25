import React from 'react';
import type { HandleProps } from 'reactflow';
import { Handle } from 'reactflow';

const CustomeHandle = (props: HandleProps) => {
  return (
    <Handle
      style={{
        width: 8,
        height: 8,
        background: 'white',
        border: '2px solid black',
      }}
      {...props}
    />
  );
};

export default CustomeHandle;
