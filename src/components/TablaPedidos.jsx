import { Table } from "@chakra-ui/react"
import { useFetch } from "../hooks/useFetch"

export const TablaPedidos = ({ vendedor, fecha }) => {

    const { data } = useFetch(vendedor, fecha);

    return (
        <>
            <Table.Root size="sm" striped showColumnBorder>
                <Table.Header>
                    <Table.Row>
                        <Table.ColumnHeader>Pedido</Table.ColumnHeader>
                        <Table.ColumnHeader>Fecha</Table.ColumnHeader>
                        <Table.ColumnHeader>Cliente</Table.ColumnHeader>
                        <Table.ColumnHeader>Vendedor</Table.ColumnHeader>
                        <Table.ColumnHeader textAlign="end">Total</Table.ColumnHeader>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {
                        // data?.ventas.map((pedido, index) => {
                        //     return (<Table.Row key={pedido.id}>
                        //         <Table.Cell>{pedido.name}</Table.Cell>
                        //         <Table.Cell>{pedido.date_order}</Table.Cell>
                        //         <Table.Cell>{pedido.partner_id[1]}</Table.Cell>
                        //         <Table.Cell>{pedido.user_id[1]}</Table.Cell>
                        //         <Table.Cell textAlign="end">{Intl.NumberFormat("es-CL").format(pedido.amount_untaxed)}</Table.Cell>
                        //     </Table.Row>);
                        // })
                        (() => {
                            const rows = [];

                            data?.ventas.forEach((pedido, index) => {
                                index < 30 && rows.push(
                                    <Table.Row key={pedido.id}>
                                        <Table.Cell>{pedido.name}</Table.Cell>
                                        <Table.Cell>{pedido.date_order}</Table.Cell>
                                        <Table.Cell>{pedido.partner_id[1]}</Table.Cell>
                                        <Table.Cell>{pedido.user_id[1]}</Table.Cell>
                                        <Table.Cell textAlign="end">{Intl.NumberFormat("es-CL").format(pedido.amount_untaxed)}</Table.Cell>
                                    </Table.Row>
                                )
                            });

                            return rows;
                        })()}
                    {/* ESTO ES UNA FUNCOIN AUTOEJECUTABLE   (() => { ... })()         */}
                </Table.Body>
            </Table.Root>
        </>
    )
}
