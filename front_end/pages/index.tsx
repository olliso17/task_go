import Head from 'next/head'
import { Box } from '@chakra-ui/react';
import { useColorsWeb } from '@/hooksPerson/colorsWeb';
import CreateUser from '@/components/ComponentsPhone/CreateUser';
import { useContext, useState } from 'react';
import { MyContext } from '@/context/cookieContext';
import LoginAccess from '@/components/ComponentsPhone/LoginAcess';
import CardStylePhone from '@/components/ComponentsPhone/CardStylePhone';
import CardStyleWeb from '@/components/ComponentsWeb/CardStyleWeb';


export default function Home() {
  const allColors = useColorsWeb()
  const value = useContext(MyContext)

  return (

      value == false ? <CardStylePhone content={<CreateUser/>} /> : <CardStyleWeb content={<CreateUser/>} />


  )
}
