/* eslint-disable react-hooks/rules-of-hooks */
// pages/index.tsx

import { useEffect } from 'react';
import { useRouter } from 'next/router';

const index = () => {
  const router = useRouter();

  useEffect(() => {
    router.push('/landingpage');
  }, [router]);

  return null;
};

export default index;
