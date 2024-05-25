'use server';

import { clerkClient } from '@clerk/nextjs';
import type { User } from '@clerk/nextjs/server';

export const getUser = async () => {
  const userList = await clerkClient.users.getUserList();
  // userList.map(user => {
  //   user.emailAddresses.forEach(emailAddress => {
  //     console.log(emailAddress.emailAddress);
  //   });
  // });

  const renderEmailAddress = (user: User): string => {
    // Map email addresses to an array of strings
    const emailAddresses = user.emailAddresses.map(
      (emailAddress) => emailAddress.emailAddress,
    );
    // Join the array of email addresses into a single string
    return emailAddresses.join(', '); // You can specify the separator here
  };

  // Fetch email addresses for each user in parallel
  //  const emailPromises = userList.map(user => clerkClient.emailAddresses.getEmailAddress(user.id));
  // Wait for all email promises to resolve
  //  const emailAddresse= await Promise.all(emailPromises)

  //  console.log("hello" + "<>>>>>"+ emailAddresse)

  // Map each user to a node object
  const userNodes = userList.map((user, index) => ({
    id: user.id.toString(),
    position: { x: 900, y: index * 100 }, // Adjust position as needed
    data: {
      name: renderEmailAddress(user) ?? 'user',
      code: 'Us',
      username: 'User',
    },
    type: 'paymentProvider', // Adjust node type as needed
  }));

  // Serialize the userNodes array into JSON
  return JSON.stringify(userNodes);
};
