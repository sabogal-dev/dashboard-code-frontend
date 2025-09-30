import { Table } from "@chakra-ui/react"


export const Tablacategorias = ({ data }) => {


    return (
        <>
            <Table.Root size="sm" variant="outline" showColumnBorder interactive>
                <Table.Header>
                    <Table.Row>
                        <Table.ColumnHeader>Marca</Table.ColumnHeader>
                        <Table.ColumnHeader textAlign="center">Cantidad</Table.ColumnHeader>
                        <Table.ColumnHeader textAlign="end">Dinero</Table.ColumnHeader>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {data && data.categorias.map((categoria) => {
                        return (
                            <Table.Row key={categoria.marca}>
                                <Table.Cell>{categoria.marca}</Table.Cell>
                                <Table.Cell textAlign="center">{categoria.cantidad}</Table.Cell>
                                <Table.Cell textAlign="end">{Intl.NumberFormat("es-CL").format(categoria.dinero)}</Table.Cell>
                            </Table.Row>
                        )
                    })}
                </Table.Body>
            </Table.Root>
        </>
    )
}
