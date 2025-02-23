/* eslint-disable react-hooks/rules-of-hooks */
// pages/index.tsx

import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { ThemeProvider } from '@/context/ThemeContext';

const index = () => {
  const router = useRouter();

  useEffect(() => {
    router.push('/landingpage');
  }, [router]);

  return (
    <ThemeProvider>
      {null}
    </ThemeProvider>
  );
};

export default index;