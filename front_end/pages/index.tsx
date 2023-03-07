import Head from 'next/head'
import CardStylePhone from '@/components/CardStylePhone';
import TitleList from '@/components/Title';
import CardAllAddList from '@/components/CardAllAddList';
import ListAll from '@/components/ListAll';
import { Box, Flex, Heading, useColorModeValue } from '@chakra-ui/react';


export default function Home() {
  const bg = useColorModeValue('purple.300', 'purple.700')
  return (
    <>
      <Head>
        <title>List Task</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="w-screen h-screen flex   flex-col justify-center items-center">
        <Flex backgroundColor={bg} height="95vh" width="95vw" justifyContent="space-around" alignItems="center">
          <CardStylePhone styleCss={"bg-violet-300 w-full h-full rounded-2xl"} contentCreateList={<CardAllAddList />} contentListAll={<ListAll />} />
        </Flex>

      </main>
    </>
  )
}
