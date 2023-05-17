import Head from 'next/head'
import { Box } from '@chakra-ui/react';
import CreateUser from '@/components/ComponentsPhone/CreateUser';
import { useContext, useState } from 'react';
import {LayoutContext } from '@/context/cookieContext';
import LoginAccess from '@/components/ComponentsPhone/LoginAcess';
import CardStylePhone from '@/components/ComponentsPhone/CardStylePhone';
import CardStyleWeb from '@/components/ComponentsWeb/CardStyleWeb';
import CreateUserWeb from '@/components/ComponentsWeb/CreateUserWeb';
import { useColorsPhone } from '@/hooksPerson/colorsPhone';


export default function Home() {
  const allColors = useColorsPhone()
  const value = useContext(LayoutContext)

  return (

      value.active == false ?  <CardStyleWeb content={<CreateUserWeb/>} /> : <CardStylePhone content={<CreateUser/>} /> 


  )
}
