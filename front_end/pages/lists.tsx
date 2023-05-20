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
import { GetServerSideProps } from 'next';
import CardAllAddListWeb from '@/components/ComponentsWeb/CardAllAddListWeb';
import ListAllWeb from '@/components/ComponentsWeb/ListAllWeb';
import { useGetListAll } from '@/services/handler/facace_list';
import { ListHttpGateway } from '@/@core/infra/gateways/list.http.gateway';
import { GetListAlltUseCase } from '@/@core/application/list/get-list-all.usecase';
import api from '@/services/backend';
import { List } from '@/@core/domain/entities/list';
import { OutputListDto } from '@/services/dto/list_dto';


export default function Home(props: any) {
  const allColors = useColorsPhone();
  const value = useContext(LayoutContext)

  useEffect(() => {
    props.token
    value.setToken(props.token)

  }, []);

  return (
    props.token != "" ?
      value.active == false ? <CardStyleWeb content={
        <CardAllAddListWeb />} /> : <CardStylePhone content={<TabsLoginOk contentCreateList={<CardAllAddList />} contentListAll={<ListAll/>} />} /> : <>Not Acesss</>
  )

}

export const getServerSideProps: GetServerSideProps = async (context) => {

  var token = context.req.cookies.session_token
  if (token == undefined) {
    token = ""
    return {
      props: {
        token: token
      }
    }
  }
 

  return {
    props: {
      token: token
    }
  }
};