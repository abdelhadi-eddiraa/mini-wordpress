'use client';

import { useClerk } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';

const LogOutButton = () => {
  const router = useRouter();
  const { signOut } = useClerk();
  const t = useTranslations('DashboardLayout');

  return (
    <button
      className="rounded-md bg-gray-700 px-2 py-[6px] font-medium text-white"
      type="button"
      onClick={() => signOut(() => router.push('/'))}
    >
      {t('sign_out')}
    </button>
  );
};

export { LogOutButton };
