import CardStylePhone from '@/components/ComponentsPhone/CardStylePhone';
import LoginAccess from '@/components/ComponentsPhone/LoginAcess';
import { useColorsPhone } from '@/hooksPerson/colorsPhone';
import React, { useContext } from 'react'
import { postLogout } from '@/services/handler/login_handler';
import { useMutation } from 'react-query';
import { useMutationPostLogout } from '@/services/handler/muation';
import CardStyleWeb from '@/components/ComponentsWeb/CardStyleWeb';
import { LayoutContext } from '@/context/cookieContext';
import LoginAccessWeb from '@/components/ComponentsWeb/LoginAcessWeb';
import { List } from '@/@core/domain/entities/list';


export default function Home() {
  const allColors = useColorsPhone()
  const mutation = useMutation({ mutationFn: postLogout, })
  const logout = useMutationPostLogout()
  const value = useContext(LayoutContext)

  return (
    value.active == false ? <CardStyleWeb content={<LoginAccessWeb />} /> : <CardStylePhone content={<LoginAccess />} />

  )
}