import { X } from 'lucide-react';
import React from 'react';
import ReactCountryFlag from 'react-country-flag';
import type { NodeProps } from 'reactflow';
import { Handle, Position, useReactFlow } from 'reactflow';

const PaymentCountry = ({
  data: { currency, country, countryCode },
  id,
}: NodeProps<{ currency: string; country: string; countryCode: string }>) => {
  const { setNodes } = useReactFlow();
  return (
    <div className="rounded-md border-2 border-stone-400 bg-white px-4 py-2 shadow-md">
      <div className="flex gap-1">
        <div className="flex size-12 items-center justify-center rounded-full bg-gray-100">
          <ReactCountryFlag
            countryCode={countryCode}
            svg
            aria-label={country}
            style={{ fontSize: '2em', lineHeight: '2em' }}
          />
        </div>
        <div className="ml-2">
          <div className="text-lg font-bold">{country}</div>
          <div className="text-gray-500">{currency}</div>
        </div>

        <X
          className="mt-2 text-sm text-red-600"
          onClick={() =>
            setNodes((prevNodes) => prevNodes.filter((node) => node.id !== id))
          }
        />
      </div>

      <Handle
        type="source"
        position={Position.Top}
        className="h-1 !w-16 !rounded-none !border-none !bg-teal-500"
      />
      <Handle
        type="target"
        position={Position.Bottom}
        className="h-1 !w-16 !rounded-none !border-none !bg-teal-500"
      />
    </div>
  );
};

export default PaymentCountry;
