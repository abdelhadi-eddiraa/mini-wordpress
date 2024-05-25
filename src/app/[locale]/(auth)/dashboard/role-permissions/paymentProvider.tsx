import Image from 'next/image';
import React from 'react';
import type { NodeProps } from 'reactflow';
import { Handle, Position, useReactFlow } from 'reactflow';

const PaymentProvider = ({
  data: { name, code },
  id,
}: NodeProps<{ name: string; code: string }>) => {
  const PAYMENT_PROVIDER_IMAGE_MAP: { [code: string]: string } = {
    St: 'https://cdn.worldvectorlogo.com/logos/stripe-2.svg',
    Ap: 'https://cdn.worldvectorlogo.com/logos/apple-14.svg',
    Gp: 'https://cdn.worldvectorlogo.com/logos/google-g-2015.svg',
    Pp: 'https://avatars.githubusercontent.com/u/476675?s=280&v=4',
    Am: 'https://static.wixstatic.com/media/d2252d_4c1a1bda6a774bd68f789c0770fd16e5~mv2.png',
    Us: 'https://th.bing.com/th/id/OIP.JBpgUJhTt8cI2V05-Uf53AHaG1?w=200&h=184&c=7&r=0&o=5&dpr=1.5&pid=1.7',
  };

  // Get the URL based on the code
  const imageUrl = code ? PAYMENT_PROVIDER_IMAGE_MAP[code] : '';

  const { setNodes } = useReactFlow();
  return (
    <div className="rounded-md border border-gray-300 bg-white px-4 py-2 shadow-md">
      <div className="flex items-center justify-between gap-x-2">
        <div className="flex items-center">
          <div className="flex size-12 items-center justify-center rounded-full bg-gray-100">
            <Image
              className="size-full"
              src={imageUrl}
              alt={name}
              width={24}
              height={24}
            />
          </div>
          <div className="ml-4">
            <div className="text-lg font-bold">{name}</div>
          </div>
        </div>
        <button
          onClick={() =>
            setNodes((prevNodes) => prevNodes.filter((node) => node.id !== id))
          }
          className="text-sm text-red-600 hover:text-red-700 focus:outline-none"
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

      <div className="mt-2">
        <Handle
          type="target"
          position={Position.Top}
          className="h-1 !w-16 !rounded-none !border-none !bg-teal-500"
        />
        <Handle
          type="source"
          position={Position.Bottom}
          className="h-1 !w-16 !rounded-none !border-none !bg-teal-500"
        />
      </div>
    </div>
  );
};

export default PaymentProvider;
