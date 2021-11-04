import AuthUser from '../components/AuthUser';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { server } from '../../config/index';

function MyApp({ Component, pageProps }) {
  return (
    <Component {...pageProps} />
  );
}

export default MyApp
