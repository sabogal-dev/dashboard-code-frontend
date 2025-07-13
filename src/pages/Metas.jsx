import React from 'react'
import { format } from '@formkit/tempo'
import { useFetch } from '../hooks/useFetch'

import { MetaVentaDinero } from '../components/metas/MetaVentaDinero'
import { MetaVendedores } from '../components/metas/MetaVendedores'
import { UsuarioAvatar } from '../components/UsuarioAvatar'
import { SpinnerLoading } from '../components/SpinnerLoading'
import { Aside } from '../components/Aside'
import { Flex, Heading, Stack } from '@chakra-ui/react'


const mesActual = format(new Date(), "YYYY-MM-01")
const hoy = format(new Date(), "YYYY-MM-DD")
export const Metas = () => {


    const { data, loading } = useFetch("", mesActual, hoy)

    return (
        <Stack m={5}>
            <Flex justify="space-between" >
                <UsuarioAvatar size="md"></UsuarioAvatar>
                <Heading>Dashboard</Heading>
                <Aside></Aside>
            </Flex>
            {loading && <SpinnerLoading></SpinnerLoading>}


            {data &&
                <>
                    <Flex direction="column" align="center">
                        <MetaVentaDinero data={data}></MetaVentaDinero>
                        <MetaVendedores data={data}></MetaVendedores>
                    </Flex>
                </>
            }



        </Stack>
    )
}