import Head from 'next/head'
import { useColorsPhone } from '@/hooksPerson/colorsPhone';
import Cookies from 'js-cookie'
import { Box, Button, Center, Flex, Stack } from '@chakra-ui/react';
import { useContext, useEffect, useState } from 'react';
import CardStylePhone from '@/components/ComponentsPhone/CardStylePhone';
import CardStyleWeb from '@/components/ComponentsWeb/CardStyleWeb';
import ListAll from '@/components/ComponentsPhone/ListAll';
import CardAllAddList from '@/components/ComponentsPhone/CardAllAddList';
import TabsLoginOk from '@/components/ComponentsPhone/TabsLoginOk';
import { MyContext } from '@/context/cookieContext';


export default function Home() {
  const allColors = useColorsPhone();
  const value = useContext(MyContext)

  return (
      value == false ? <CardStylePhone content={<TabsLoginOk contentCreateList={<CardAllAddList />} contentListAll={<ListAll />} />} /> : <CardStyleWeb content={<TabsLoginOk contentCreateList={<CardAllAddList />} contentListAll={<ListAll />} />} />

  )

}
