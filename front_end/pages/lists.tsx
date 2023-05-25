import { useColorsPhone } from '@/hooksPerson/colorsPhone';
import { useContext, useEffect } from 'react';
import CardStyleWeb from '@/components/ComponentsWeb/CardStyleWeb';
import { LayoutContext } from '@/context/layoutContext';
import { GetServerSideProps } from 'next';
import CardAllAddListWeb from '@/components/ComponentsWeb/CardAllAddListWeb';


export default function Home(props: any) {
  const allColors = useColorsPhone();
  const value = useContext(LayoutContext)

  useEffect(() => {
    props.token
    value.setToken(props.token)

  }, []);

  return (
    props.token != "" ?
      <CardStyleWeb content={
        <CardAllAddListWeb />} />: <>Not Acesss</>
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