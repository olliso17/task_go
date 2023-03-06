import Head from 'next/head'
import CardStylePhone from '@/components/CardStylePhone';
import TitleList from '@/components/Title';
import CardAllAddList from '@/components/CardAllAddList';
import { useState } from 'react';
import Task from '@/components/Task';
import ListAll from '@/components/ListAll';
import ButtonCardHome from '@/components/ButtonCardHome';
import * as ScrollArea from '@radix-ui/react-scroll-area';
import Link from 'next/link';


export default function Home() {
  const [contentView1, setContetView1] = useState(<CardAllAddList />);
  const [contentView2, setContetView2] = useState(<></>);
  const [colorBackground, setColorBackground] = useState("bg-violet-300 w-full h-full rounded-2xl");
  const [colorBackground2, setColorBackground2] = useState("bg-violet-300 w-full h-full rounded-2xl");

  return (
    <>
      <Head>
        <title>List Task</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="w-screen h-screen flex   flex-col justify-center items-center">
        <div className='flex flex-row w-11/12 h-full bg-violet-200 items-center justify-around'>
          <CardStylePhone styleCss={colorBackground} content={
            <>
              <div className="flex">
                <ButtonCardHome tipoButton={() =>
                (
                  setColorBackground("bg-violet-300 w-full h-full rounded-2xl"),
                  setContetView1(<CardAllAddList />)
                )
                }
                  styleCss="w-48 h-20 bg-violet-300 hover:bg-violet-400 border-violet-400 border-solid border-l-0 border-b-0 border-r border-t-0 rounded-t-lg" content={<TitleList titleList='Create List' />} />
                <ButtonCardHome tipoButton={() => (
                  setColorBackground("bg-violet-500 w-full h-full rounded-2xl"),
                  setContetView1(
                    <div className='overflow-auto  pt-[60px] h-[680px] flex flex-col justify-center items-center'>
                        <ListAll />
                    </div>
                  )
                )
                }
                  styleCss="w-48 h-20 bg-violet-500 hover:bg-violet-400 border-violet-400 border-solid border-l-0 border-b-0 border-r border-t-0 rounded-t-lg" content={<TitleList titleList='All Lists' />} />

              </div>
              {contentView1}

            </>
          } />
          <CardStylePhone styleCss={colorBackground2} content={
            <>
              <div className="flex">
                <ButtonCardHome tipoButton={() => (
                  setColorBackground2("bg-violet-300 w-full h-full rounded-2xl"),
                  setContetView2(<div>List</div>)
                )
                } styleCss="w-48 h-20 bg-violet-300 hover:bg-violet-400 border-violet-400 border-solid border-l-0 border-b-0 border-r border-t-0 rounded-t-lg" content={<TitleList titleList='List ID' />} />
                <ButtonCardHome tipoButton={() => (
                  setColorBackground2("bg-violet-500 w-full h-full rounded-2xl"),
                  setContetView2(<Task />)
                )
                }
                  styleCss="w-48 h-20 bg-violet-500 hover:bg-violet-400 border-violet-400 border-solid border-l-0 border-b-0 border-r border-t-0 rounded-t-lg" content={<TitleList titleList='All Tasks' />} />

              </div>
              {contentView2}

            </>
          } />

        </div>

      </main>
    </>
  )
}
