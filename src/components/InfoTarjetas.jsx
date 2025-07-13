import { useEffect, useState } from "react"
import { TarjetaDatos } from "./TarjetaDatos"

import { Group, Flex } from "@chakra-ui/react"

export const InfoTarjetas = ({ data }) => {



    const [ventaTotal, setventaTotal] = useState(0)
    const [monturasTotal, setmonturasTotal] = useState(0)
    const [pedidos, setpedidos] = useState(0)
    const [promPedido, setpromPedido] = useState(0)
    useEffect(() => {
        if (data) {
            let ventas = 0;
            let pedidos = 0;
            let monturas = 0;
            let promedioMonturas = 0;

            data.ventas.forEach(venta => {
                ventas = ventas + venta.amount_untaxed;
                pedidos += 1;
            });

            data.monturas.forEach(montura => {
                monturas = monturas + montura.product_uom_qty;
            });

            promedioMonturas = Math.floor(ventas / pedidos);


            setpromPedido(promedioMonturas)
            setventaTotal(ventas);
            setpedidos(pedidos);
            setmonturasTotal(monturas);
        }
    }, [data])

    return (
        <>
            <Flex direction="column" align="center" gap={2}>
                <Group>
                    <TarjetaDatos valor={ventaTotal} titulo="Ventas" prefijo="$"></TarjetaDatos>
                    <TarjetaDatos valor={promPedido} titulo="Pedido Promedio" prefijo="$"></TarjetaDatos>
                </Group>
                <Group>
                    <TarjetaDatos valor={monturasTotal} titulo="Monturas"></TarjetaDatos>
                    <TarjetaDatos valor={pedidos} titulo="Pedidos"></TarjetaDatos>
                </Group>
            </Flex>
        </>
    )
}
