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
import { LayoutContext } from '@/context/cookieContext';


export default function Home() {
  const allColors = useColorsPhone();
  const value = useContext(LayoutContext)


  useEffect(()=>{value.token},[value.token]);
  return (
      /*value.token!= ''?*/
      value.active == false ? <CardStylePhone content={<TabsLoginOk contentCreateList={<CardAllAddList />} contentListAll={<ListAll />} />} /> : <CardStyleWeb content={<TabsLoginOk contentCreateList={<CardAllAddList />} contentListAll={<ListAll />} />} />/*:<>Not Acesss</>*/

  )

}
