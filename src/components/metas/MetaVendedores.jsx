import React from 'react'
import { Heading, Table, FormatNumber, Stack, Separator } from '@chakra-ui/react'
export const MetaVendedores = ({ data }) => {


    const vendedoresMetas = [
        {
            vendedor: "YESID FERNANDO SIERRA SIERRA",
            meta: {
                dinero: 21070000,
                premium: 70,
                petite: 50,
                "code line": 70,
                "code sport": 40,
                tonelly: 30,
                oh: 30,
                forzanny: 1
            },
            logrado: {
                dinero: 0,
                premium: 0,
                petite: 0,
                "code line": 0,
                "code sport": 0,
                tonelly: 0,
                oh: 0,
                forzanny: 0
            }
        },
        {
            vendedor: "JORGE GUALDRON",
            meta: {
                dinero: 40115000,
                premium: 150,
                petite: 80,
                "code line": 140,
                "code sport": 100,
                tonelly: 50,
                oh: 1,
                forzanny: 1
            },
            logrado: {
                dinero: 0,
                premium: 0,
                petite: 0,
                "code line": 0,
                "code sport": 0,
                tonelly: 0,
                oh: 0,
                forzanny: 0
            }
        }, {
            vendedor: "OSCAR DANIEL RIOS LOAIZA",
            meta: {
                dinero: 55000000,
                premium: 165,
                petite: 150,
                "code line": 170,
                "code sport": 160,
                tonelly: 110,
                oh: 210,
                forzanny: 1
            },
            logrado: {
                dinero: 0,
                premium: 0,
                petite: 0,
                "code line": 0,
                "code sport": 0,
                tonelly: 0,
                oh: 0,
                forzanny: 0
            }
        }, {
            vendedor: "MAYERLY ANDREA ORTIZ",
            meta: {
                dinero: 14000000,
                premium: 100,
                petite: 100,
                "code line": 100,
                "code sport": 100,
                tonelly: 100,
                oh: 100,
                forzanny: 1
            },
            logrado: {
                dinero: 0,
                premium: 0,
                petite: 0,
                "code line": 0,
                "code sport": 0,
                tonelly: 0,
                oh: 0,
                forzanny: 0
            }
        }, {
            vendedor: "LADY RIOS",
            meta: {
                dinero: 14000000,
                premium: 100,
                petite: 100,
                "code line": 100,
                "code sport": 100,
                tonelly: 100,
                oh: 100,
                forzanny: 1
            },
            logrado: {
                dinero: 0,
                premium: 0,
                petite: 0,
                "code line": 0,
                "code sport": 0,
                tonelly: 0,
                oh: 0,
                forzanny: 0
            }
        },
    ]

    const filtroMarcas = [
        { filtro: "PREMIUM", marca: "premium" },
        { filtro: "PET", marca: "petite" },
        { filtro: "LINE", marca: "code line" },
        { filtro: "TR90", marca: "code sport" },
        { filtro: "TONELLY", marca: "tonelly" },
        { filtro: "OH", marca: "oh" },
        { filtro: "FOR", marca: "forzanny" }
    ]

    data && vendedoresMetas.forEach((vendedor, index) => {

        //LEE CADA VENTA Y SUMA EL TOTAL DE VENTAS DEL MES
        data.ventas.forEach(venta => {
            if (venta.user_id[1] == vendedor.vendedor) {
                vendedoresMetas[index].logrado.dinero = vendedoresMetas[index].logrado.dinero + venta.amount_untaxed
            }
        });

        //lee todas las ventas
        data.ventas.forEach(venta => {
            if (venta.user_id[1] == vendedor.vendedor) {

                filtroMarcas.forEach(marca => {//leo cada una de las marcas
                    venta.orderLine.forEach(montura => {//leo cada montura y la comparo con la marca

                        //MUCHA LOGICAAAAAAAA AQUIIIII POR DIOS
                        //si la montura inclute la amarca => entonces => suma las monturas a sus monturas logradas con (i = i + cantidad)
                        montura.name.includes(marca.filtro) ? vendedoresMetas[index].logrado[marca.marca] = (vendedoresMetas[index].logrado[marca.marca]) + montura.product_uom_qty : null
                    });
                });
            }
        });
    });

    return (
        <Stack gap={10}>
            {vendedoresMetas.map((vendedor) => (
                <Stack key={vendedor.vendedor}>
                    <Separator/>
                    <Heading>{vendedor.vendedor}</Heading>
                    <Table.Root size="sm" variant="outline">
                        <Table.Header>
                            <Table.Row>
                                <Table.ColumnHeader>Objetivo</Table.ColumnHeader>
                                <Table.ColumnHeader>Vendido</Table.ColumnHeader>
                                <Table.ColumnHeader textAlign="center">Meta</Table.ColumnHeader>
                                <Table.ColumnHeader textAlign="center">%</Table.ColumnHeader>
                            </Table.Row>
                        </Table.Header>
                        <Table.Body>
                            <Table.Row >
                                <Table.Cell>Dinero</Table.Cell>
                                <Table.Cell><FormatNumber style="currency" currency="USD" value={vendedor.logrado.dinero} maximumFractionDigits={0}></FormatNumber></Table.Cell>
                                <Table.Cell><FormatNumber style="currency" currency="USD" value={vendedor.meta.dinero} maximumFractionDigits={0} /></Table.Cell>
                                <Table.Cell><FormatNumber style="percent" maximumFractionDigits={2} value={(vendedor.logrado.dinero / vendedor.meta.dinero)}></FormatNumber></Table.Cell>
                            </Table.Row>
                            <Table.Row >
                                <Table.Cell>Premium</Table.Cell>
                                <Table.Cell textAlign="center">{vendedor.logrado.premium}</Table.Cell>
                                <Table.Cell textAlign="center">{vendedor.meta.premium}</Table.Cell>
                                <Table.Cell><FormatNumber style="percent" maximumFractionDigits={2} value={(vendedor.logrado.premium / vendedor.meta.premium)}></FormatNumber></Table.Cell>
                            </Table.Row>
                            <Table.Row >
                                <Table.Cell>Petite</Table.Cell>
                                <Table.Cell textAlign="center">{vendedor.logrado.petite}</Table.Cell>
                                <Table.Cell textAlign="center">{vendedor.meta.petite}</Table.Cell>
                                <Table.Cell><FormatNumber style="percent" maximumFractionDigits={2} value={(vendedor.logrado.petite / vendedor.meta.petite)}></FormatNumber></Table.Cell>
                            </Table.Row>
                            <Table.Row >
                                <Table.Cell>Line</Table.Cell>
                                <Table.Cell textAlign="center">{vendedor.logrado["code line"]}</Table.Cell>
                                <Table.Cell textAlign="center">{vendedor.meta["code line"]}</Table.Cell>
                                <Table.Cell><FormatNumber style="percent" maximumFractionDigits={2} value={(vendedor.logrado["code line"] / vendedor.meta["code line"])}></FormatNumber></Table.Cell>
                            </Table.Row>
                            <Table.Row >
                                <Table.Cell>Sport</Table.Cell>
                                <Table.Cell textAlign="center">{vendedor.logrado["code sport"]}</Table.Cell>
                                <Table.Cell textAlign="center">{vendedor.meta["code sport"]}</Table.Cell>
                                <Table.Cell><FormatNumber style="percent" maximumFractionDigits={2} value={(vendedor.logrado["code sport"] / vendedor.meta["code sport"])}></FormatNumber></Table.Cell>
                            </Table.Row>
                            <Table.Row >
                                <Table.Cell>Tonelly</Table.Cell>
                                <Table.Cell textAlign="center">{vendedor.logrado.tonelly}</Table.Cell>
                                <Table.Cell textAlign="center">{vendedor.meta.tonelly}</Table.Cell>
                                <Table.Cell><FormatNumber style="percent" maximumFractionDigits={2} value={(vendedor.logrado.tonelly / vendedor.meta.tonelly)}></FormatNumber></Table.Cell>
                            </Table.Row>
                            <Table.Row >
                                <Table.Cell>Oh</Table.Cell>
                                <Table.Cell textAlign="center">{vendedor.logrado.oh}</Table.Cell>
                                <Table.Cell textAlign="center">{vendedor.meta.oh}</Table.Cell>
                                <Table.Cell><FormatNumber style="percent" maximumFractionDigits={2} value={(vendedor.logrado.oh / vendedor.meta.oh)}></FormatNumber></Table.Cell>
                            </Table.Row>
                            <Table.Row >
                                <Table.Cell>Forzanny</Table.Cell>
                                <Table.Cell textAlign="center">{vendedor.logrado.forzanny}</Table.Cell>
                                <Table.Cell textAlign="center">{vendedor.meta.forzanny}</Table.Cell>
                                <Table.Cell><FormatNumber style="percent" maximumFractionDigits={2} value={(vendedor.logrado.forzanny / vendedor.meta.forzanny)}></FormatNumber></Table.Cell>
                            </Table.Row>
                        </Table.Body>
                    </Table.Root>
                </Stack>
            ))}
        </Stack>
    )
}
