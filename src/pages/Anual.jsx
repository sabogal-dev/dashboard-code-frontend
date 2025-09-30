import React, { useEffect, useState } from 'react'
import { Aside } from '../components/Aside'
import { UsuarioAvatar } from '../components/UsuarioAvatar'
import { Flex, Heading, Stack } from '@chakra-ui/react'
import { format } from '@formkit/tempo'
import { agruparApi } from '../api/agruparApi'
import { BarrasChartAnual } from '../components/anualCharts/BarrasChartAnual'

export const Anual = () => {
    const yearActual = parseInt(format(new Date(), "YYYY"))
    const [yearSeleccionado, setyearSeleccionado] = useState(yearActual - 1)

    const [data, setData] = useState(null);


    const solicitarDatos = async () => {
        const respuesta = await agruparApi({
            "modelo": "sale.order",
            "filtro": [["state", "=", "sale"],],
            "columna": ["amount_untaxed"],
            "agrupar": ["date_order:year", "date_order:month"]
        });
        setData(respuesta)
    }

    useEffect(() => {
        solicitarDatos()
    }, [])


    return (
        <>
            <Stack m={5}>

                <Flex justify="space-between" >
                    <UsuarioAvatar size="md"></UsuarioAvatar>
                    <Heading>Dashboard</Heading>
                    <Aside></Aside>
                </Flex>
                <BarrasChartAnual data={data} />
            </Stack>
        </>
    )
}
