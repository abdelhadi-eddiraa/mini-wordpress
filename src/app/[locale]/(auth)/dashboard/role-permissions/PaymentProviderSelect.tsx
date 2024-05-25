'use client';

import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { useReactFlow } from 'reactflow';

const PAYMENT_PROVIDERS = [
  { code: 'St', name: 'Stripe' },
  { code: 'Gp', name: 'Google Pay' },
  { code: 'Ap', name: 'Apple Pay' },
  { code: 'Pp', name: 'Paypal' },
  { code: 'Am', name: 'Amazon Pay' },
];

export default function PaymentProviderSelect() {
  const { setNodes } = useReactFlow();
  const [open, setOpen] = useState(false);

  const onProviderClick = ({ name, code }: { name: string; code: string }) => {
    const location = Math.random() * 500;

    setNodes((prevNodes) => [
      ...prevNodes,
      {
        id: `${prevNodes.length + 1}`,
        data: { name, code },
        type: 'paymentProvider',
        position: { x: location, y: location },
      },
    ]);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        type="button"
        className="inline-flex w-full justify-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        id="options-menu"
        aria-haspopup="true"
        aria-expanded="true"
        onClick={() => setOpen((prev) => !prev)}
      >
        Add Payment Provider
        <ChevronDown className="-mr-1 ml-2 size-5" />
      </button>
      {open && (
        <div
          className="absolute right-0 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <div className="py-1" role="none">
            {PAYMENT_PROVIDERS.map((provider) => (
              <button
                key={provider.code}
                onClick={() => onProviderClick(provider)}
                className="block w-full px-4 py-2 text-left text-sm text-gray-700"
                role="menuitem"
              >
                {provider.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
