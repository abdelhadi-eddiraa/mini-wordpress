import { AppWindowMac, Rows3, User } from 'lucide-react';
import React from 'react';
import { BiKey, BiMap, BiPowerOff } from 'react-icons/bi';

interface NodeSideBarProps {
  handleDragStart: (item: any) => void;
  selectedNodetype: any;
}

const NodeSideBar = ({
  handleDragStart,
  selectedNodetype,
}: NodeSideBarProps) => {
  const items = [
    {
      icon: <User className="size-12 text-gray-600" />,
      title: 'User',
      description: 'Create new Users and give them their own credentials',
    },
    {
      icon: <AppWindowMac className="size-12 text-gray-600" />,
      title: 'Permissions',
      description: 'Assign permissions to a role',
    },
    {
      icon: <Rows3 className="size-12 text-gray-600" />,
      title: 'Role',
      description: 'Assign a role to a user',
    },
  ];

  // console.log(selectedNodetype?.type)
  // const handleDragStart=(e,card)=>{
  //  e.dataTransfer.setData("cardId",card.id)
  // }
  return (
    <div className="h-full w-[440px] flex-col gap-y-4 bg-[#F5F5F5] p-3 pb-40 lg:flex">
      <div className="flex w-full items-center">
        <div className="flex items-center gap-x-2">
          {/** the logo div */}
          <div className="h-auto w-[30px] rounded-[8px] border-[.5px] border-solid border-black/10">
            <svg
              width="260"
              height="258"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 258 258"
              className="h-auto w-full"
            >
              <path
                d="M.999 56c0-30.928 25.072-56 56-56h145.999c30.928 0 56.001 25.072 56.001 56v146c0 30.928-25.073 56-56.001 56h-146c-30.927 0-56-25.072-56-56V56Z"
                fill="#2797CF"
              />
              <path
                d="M127.471 181.343c142.737-85.988-11.235 6.973 131.501-79.015v104.467l-22.19 41.428-109.311-66.88Z"
                fill="#FFFFFE"
                fillOpacity="0.4"
              />
              <path
                d="M.996 200.074v-98.851l229.848 139.936-17.949 11.62-191.144-11.247L.996 200.074Z"
                fill="#FFFFFE"
                fillOpacity="0.4"
              />
              <path
                opacity="0.1"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1 73.872V59.627l128.998 79.348L259.009 59.8v14.245l-129.01 79.175-129-79.348Z"
                fill="#000"
              />
              <path
                d="M130.373 138.294.999 59.63v-3.193C.999 25.268 26.356 0 57.635 0h144.727c31.57 0 57.046 25.722 56.632 57.178l-.033 2.452-128.588 78.664Z"
                fill="#FFFFFE"
                fillOpacity="0.4"
              />
              <path
                d="m1.634 50.98 128.364 78.713 128.441-78.639.398 5.429v4.285l-128.839 78.879L1.16 60.767v-4.783l.474-5.003Z"
                fill="#B1DAEE"
              />
              <path
                d="M129.998 179.208 1.16 100.329v9.953l214.785 131.557 5.85-1.712 4.483-1.904-88.208-54.004 120.767-73.937v-9.953l-128.839 78.879Z"
                fill="#B1DAEE"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1 184.501V202c0 30.928 25.072 56 56 56h146c30.928 0 56-25.072 56-56v-17.499c0 30.928-25.072 56-56 56H57c-30.928 0-56-25.072-56-56Z"
                fill="#2797CF"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M56.999 0c-30.928 0-56 25.072-56 56v1.476C4.023 29.4 27.796 7.543 56.674 7.543H203c30.928 0 56 25.072 56 56V56c0-30.928-25.072-56-56-56h-146Z"
                fill="#fff"
                fillOpacity="0.3"
                className=""
              />
            </svg>
          </div>
          {/** the logo div */}

          {/** the info div */}
          <div className=" flex flex-col">
            <span className="body-small">Skiff Mail</span>
            <span className="caption text-gray-600">Nightwatch</span>
          </div>
          {/** the info div */}
        </div>
      </div>

      {selectedNodetype ? (
        <div className="flex w-full flex-col gap-8 rounded-md bg-white p-5 sm:p-10">
          {selectedNodetype.data.username}
          {selectedNodetype.type === 'paymentInit' && (
            <>
              <InputGroup3
                name="Role"
                label="Enter Role Name"
                type="text"
                decoration={<BiMap size="1rem" />}
              />
              <InputGroup3
                name="description"
                label="Enter Description"
                decoration={<BiMap size="1rem" />}
              />
            </>
          )}

          {selectedNodetype.type === 'paymentCountry' && (
            <>
              <InputGroup3
                name="permission"
                label="Enter Permission Name"
                type="text"
                decoration={<BiMap size="1rem" />}
              />
              <InputGroup3
                name="permission-description"
                label="Enter Description"
                decoration={<BiMap size="1rem" />}
              />
              <InputGroup3
                name="scope"
                label="Enter Scope *"
                type="text"
                decoration={<BiKey size="1rem" />}
              />
            </>
          )}
          {selectedNodetype.type === 'paymentProvider' && (
            <>
              <InputGroup3
                name="Name"
                label="Enter Name"
                type="text"
                decoration={<BiKey size="1rem" />}
              />
              <InputGroup3
                name="Email"
                label="Enter Email"
                decoration={<span className="hidden sm:block">@gmail.com</span>}
              />
              <InputGroup3
                name="username"
                label="Enter Username"
                type="text"
                decoration={<BiKey size="1rem" />}
              />
              <InputGroup3
                name="picture"
                label="Profile Picture"
                type="file"
                decoration={<BiPowerOff size="1rem" />}
              />
            </>
          )}
        </div>
      ) : (
        <div className="flex h-full flex-col gap-2">
          {items.map((item, index) => (
            <div
              aria-label={item.title}
              draggable
              key={index}
              onDragStart={() => handleDragStart(item)}
              className="-ml-1 flex cursor-grab items-center gap-x-2 rounded-lg bg-white p-2 shadow-sm"
            >
              <div className="flex aspect-square h-full items-center justify-center rounded-md border border-gray-400/30 p-2">
                {item.icon}
              </div>

              <div className="flex flex-col gap-2">
                <span className="text-xl text-black ">{item.title}</span>
                <span className="body-small text-gray-600">
                  {item.description}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default NodeSideBar;

interface InputGroupProps {
  label: string;
  name: string;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  type?: 'text' | 'email' | 'password' | 'file'; // Specify the type as one of these strings
  decoration?: React.ReactNode; // Specify the type as React.ReactNode
  inputClassName?: string;
  decorationClassName?: string;
  disabled?: boolean;
}

const InputGroup3: React.FC<InputGroupProps> = ({
  label,
  name,
  value,
  onChange,
  type = 'text',
  decoration,
  inputClassName = '',
  decorationClassName = '',
  disabled,
}) => {
  return (
    <div className="flex w-full items-stretch">
      <input
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        type={type}
        placeholder={label}
        aria-label={label}
        className={`peer block w-full appearance-none rounded rounded-r-none border border-gray-400 bg-white p-3 text-gray-600 transition-colors duration-300 focus:border-red-400 focus:outline-none focus:ring-0 ${
          disabled ? 'bg-gray-200' : ''
        } ${inputClassName}`}
        disabled={disabled}
      />
      <div
        className={`flex items-center rounded rounded-l-none border border-l-0 border-gray-400 p-3 text-gray-600 ${
          disabled ? 'bg-gray-200' : ''
        } ${decorationClassName}`}
      >
        {decoration}
      </div>
    </div>
  );
};
