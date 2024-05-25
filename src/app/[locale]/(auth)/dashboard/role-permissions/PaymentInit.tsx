import React from 'react';
import type { NodeProps } from 'reactflow';
import { Handle, Position, useReactFlow } from 'reactflow';

const PaymentInit = ({ data: { name }, id }: NodeProps<{ name: string }>) => {
  const { setNodes } = useReactFlow();
  return (
    <div className="rounded-lg border border-purple-700 bg-white shadow-md">
      <div className="rounded-t-lg bg-purple-900 px-3 py-2">
        <span className="text-sm font-bold text-white">Role</span>
      </div>
      <div className="flex items-center justify-between gap-y-2 p-4">
        <span className="text-2xl text-blue-600">{name}</span>
        <button
          onClick={() =>
            setNodes((prevNodes) => prevNodes.filter((node) => node.id !== id))
          }
          className="text-sm text-red-600 hover:text-red-800 focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="size-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 1c5.523 0 10 4.477 10 10s-4.477 10-10 10S0 16.523 0 11 4.477 1 10 1zm4.293 4.293a1 1 0 00-1.414 0L10 8.586 6.121 4.707a1 1 0 10-1.414 1.414L8.586 10l-3.879 3.879a1 1 0 101.414 1.414L10 11.414l3.879 3.879a1 1 0 001.414-1.414L11.414 10l3.879-3.879a1 1 0 000-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      <div className="flex justify-between px-4 pb-2">
        <Handle
          type="source"
          position={Position.Left}
          className="!h-4 !w-1 !rounded-none !border-none !border-purple-500"
        />

        <Handle
          type="target"
          position={Position.Right}
          className="!h-4 !w-1 !rounded-none !border-none !border-purple-500"
        />
      </div>
    </div>
  );
};

export default PaymentInit;
