import Head from 'next/head'
import { Box, Button, Flex, Stack } from '@chakra-ui/react';
import CardStylePhone from '@/components/ComponentsPhone/CardStylePhone';
import LoginAccess from '@/components/ComponentsPhone/LoginAcess';
import { useColorsPhone } from '@/hooksPerson/colorsPhone';
import React, { useContext, useEffect, useState } from 'react'
import { postLogout } from '@/services/handler/login_handler';
import { useMutation } from 'react-query';
import { useMutationPostLogout } from '@/services/handler/muation';
import CardStyleWeb from '@/components/ComponentsWeb/CardStyleWeb';
import { MyContext } from '@/context/cookieContext';


export default function Home() {
  const allColors = useColorsPhone()
  const mutation = useMutation({ mutationFn: postLogout, })
  const logout = useMutationPostLogout()
  const value = useContext(MyContext)
  return (
    value == false ? <CardStylePhone content={<LoginAccess />} /> : <CardStyleWeb content={<LoginAccess />} />

  )
}