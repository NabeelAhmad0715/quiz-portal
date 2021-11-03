import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { server } from '../../config/index';
import jwt from 'jsonwebtoken';
const AuthUser = () => {
  // const [user, setUser] = useState('');
  const router = useRouter();
  useEffect(async () => {
    const user = JSON.parse(localStorage.getItem('user'));

    // const isAuthenticated = jwt.verify(user.token, process.env.SECRET);

    const route = (router.pathname == '/' ? 'dashboard' : router.pathname);
    {user ? router.push(`${server}/${route}`) : router.push('/auth/login')};
  }),[];
  return <></>;
}

export default AuthUser;