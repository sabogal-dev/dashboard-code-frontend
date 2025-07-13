import React from 'react'

import { Stat, Progress, FormatNumber } from '@chakra-ui/react'
export const MetaVentaDinero = ({ data }) => {


    let dinero = 0;
    const meta = 105000000;
    data.ventas.forEach(venta => {
        dinero = dinero + venta.amount_untaxed
    });

    let progreso = 0;
    
    if (dinero / meta > 1) {
        progreso = 100
    } else {
        progreso = (dinero/meta)*100
    }

    return (
        <Stat.Root m={10} w="300px">
            <Stat.ValueText>Meta Mensual</Stat.ValueText>
            <Progress.Root value={progreso} striped animated>
                <Progress.Track>
                    <Progress.Range />
                </Progress.Track>
            </Progress.Root>
            <Stat.HelpText mb="2"><FormatNumber value={dinero} notation="compact" /> / <FormatNumber value={meta} notation="compact" /></Stat.HelpText>
        </Stat.Root>
    )
}
