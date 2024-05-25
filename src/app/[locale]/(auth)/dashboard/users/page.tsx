import { clerkClient } from '@clerk/nextjs';
import React from 'react';
import { CiSearch } from 'react-icons/ci';
import { IoIosArrowDown, IoIosArrowForward } from 'react-icons/io';
import { PiDotsThreeBold } from 'react-icons/pi';

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

const page = async () => {
  const users = await clerkClient.users.getUserList();
  console.log(users);
  return (
    <div className="flex flex-col">
      <div className=" flex items-center gap-2">
        <p className="">users</p>
        <div className="size-4 shrink-0 overflow-visible stroke-[1.25]">
          <IoIosArrowForward />
        </div>

        <p>overview</p>
      </div>

      <div className="flex flex-col gap-y-2 py-8">
        <div className="">
          <p className="text-4xl font-semibold text-black">User</p>
        </div>
        <div>
          <p className="text-xl font-semibold text-black/15">
            View And manage users
          </p>
        </div>
      </div>

      {/** search input */}
      <div className=" flex items-center justify-between">
        <div className="flex flex-1 gap-4">
          <div className="relative flex w-[30%] shadow-sm">
            <CiSearch className="absolute m-3 size-5 translate-y-[50%]" />

            <input
              type="text"
              className="flex-1  rounded-md border-2 border-gray-500 px-8 py-4"
            />
          </div>

          <div className="lg:min-w-[200px]">
            <button className="group relative inline-flex select-none items-center justify-center rounded-md border-2 border-gray-500 bg-slate-100 px-8 py-4 font-medium outline-none">
              <span className="inline-flex w-full gap-1.5 whitespace-nowrap">
                <span className="flex items-center gap-1.5">
                  <span className="font-book text-tertiary">Sort:</span>
                  <span className="pointer-events-none">Joind</span>
                </span>
                <span className="flex  items-center text-[#9394a1] transition-colors group-hover:text-[#9394a1]">
                  <IoIosArrowDown />
                </span>
              </span>
            </button>
          </div>
        </div>

        <div>
          <button
            type="button"
            className="rounded-lg bg-blue-700 px-8 py-4 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add user
          </button>
        </div>
      </div>

      {/** search input */}

      {/** tabel */}
      <section className="mb-4 mt-10">
        <div className="overflow-hidden rounded-lg">
          <Table>
            <TableCaption>A list of users</TableCaption>
            <TableHeader>
              <TableRow className="bg-gray-50">
                <TableHead className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  Name
                </TableHead>
                <TableHead className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  Email
                </TableHead>
                <TableHead className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  Created At
                </TableHead>
                <TableHead className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500" />
              </TableRow>
            </TableHeader>
            <TableBody className="">
              {users.map((user, index) => (
                <TableRow key={index}>
                  <TableCell className="whitespace-nowrap px-6 py-4">
                    {user.firstName} {user.lastName}
                  </TableCell>
                  <TableCell className="whitespace-nowrap px-6 py-4">
                    {user.emailAddresses[0]?.emailAddress}
                  </TableCell>
                  <TableCell className="whitespace-nowrap px-6 py-4">
                    {new Date(user.createdAt).toLocaleString()}
                  </TableCell>
                  <TableCell className="whitespace-nowrap px-6 py-4">
                    <div className="flex items-center justify-end  focus-within:opacity-100 group-focus-within/table-row:opacity-100 group-hover/table-row:opacity-100">
                      <button
                        className="group relative inline-flex flex-none select-none items-center justify-center overflow-hidden rounded bg-[--button-color-bg] px-3 py-1.5 text-base font-medium outline-none ring-[0.1875rem] ring-transparent ring-offset-[0.0625rem] ring-offset-[--button-color-border] transition [--button-color-bg:theme(colors.transparent)] [--button-color-border:--button-color-bg] [--button-color-icon-hover:theme(textColor.primary)] [--button-color-icon:theme(textColor.tertiary)] [--button-color-ring:theme(colors.black/0.08)] [--button-color-text:theme(textColor.primary)] before:bg-[radial-gradient(75%_75%_at_center_top,theme(colors.white/20%),transparent)] before:transition after:transition hover:[--button-color-bg:theme(colors.gray.100)] focus-visible:ring-[--button-color-ring] focus-visible:[--button-color-border:theme(colors.black/0.15)] data-[state=open]:[--button-color-bg:theme(colors.gray.100)]"
                        type="button"
                        id="radix-:ru:"
                        aria-haspopup="menu"
                        aria-expanded="false"
                        data-state="closed"
                      >
                        <span className="inline-flex w-full">
                          <span
                            className="inline-flex w-full items-center justify-center gap-1.5 whitespace-nowrap text-[--button-color-text] drop-shadow-[--button-text-shadow] transition [--button-height:calc((theme(spacing.3)+theme(fontSize.base[1].lineHeight))*-1)]"
                            style={{
                              transform: 'translateY(0%) translateZ(0px)',
                            }}
                          >
                            <span className="-mx-1.5">
                              <PiDotsThreeBold />

                              <span className="sr-only">Menu</span>
                            </span>
                          </span>
                        </span>
                      </button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </section>

      {/** table */}
    </div>
  );
};

export default page;
