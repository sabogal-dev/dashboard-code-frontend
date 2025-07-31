import React from 'react'
import { Aside } from '../components/Aside'
import { UsuarioAvatar } from '../components/UsuarioAvatar'
import { Flex, Heading, Stack } from '@chakra-ui/react'
export const Anual = () => {
    return (
        <>
            <Stack m={5}>

                <Flex justify="space-between" >
                    <UsuarioAvatar size="md"></UsuarioAvatar>
                    <Heading>Dashboard</Heading>
                    <Aside></Aside>
                </Flex>
            </Stack>
        </>
    )
}
