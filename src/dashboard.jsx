import { useState } from "react"

import { Tablacategorias } from "./components/dashboardCharts/TablaCategorias"
import { Filtros } from "./components/Filtros"
import { GraficoBar } from "./components/dashboardCharts/GraficoBar"
import { UsuarioAvatar } from "./components/UsuarioAvatar"
import { ListaBarras } from "./components/dashboardCharts/ListaBarras"
import { InfoTarjetas } from "./components/dashboardCharts/InfoTarjetas"
import { Aside } from "./components/Aside"
import { SpinnerLoading } from "./components/SpinnerLoading"

import { useFetch } from "./hooks/useFetch"

import { FaSearch } from "react-icons/fa";

import { Group, Heading, Separator, Stack, Flex, Button } from "@chakra-ui/react"
import { format } from "@formkit/tempo"

export const Dashboard = () => {

    const mesActual = format(new Date(), "YYYY-MM-01")
    const hoy = format(new Date(), "YYYY-MM-DD")

    //condiciones de filtrado API
    const [vendedor, setvendedor] = useState("");
    const [fecha, setfecha] = useState(mesActual)
    const [fechaFinal, setfechaFinal] = useState(hoy)

    //mostrar Filtros
    const [filtros, setfiltros] = useState(false)

    const ocultarFiltro = () => {
        setfiltros(!filtros)
    }

    const { data, loading } = useFetch(vendedor, fecha, fechaFinal)

    const handleChange = (vendedor) => {
        setvendedor(vendedor);
    }
    const handleFechaInicio = (valor) => {
        setfecha(valor);

    }
    const handleFechaFinal = (valorFecha) => {
        console.log("fecha final" + valorFecha)

        if (valorFecha == "") {
            return
        }
        setfechaFinal(valorFecha)
    }

    return (
        <Stack m={5}>
            <Flex justify="space-between" >
                <UsuarioAvatar size="md"></UsuarioAvatar>
                <Heading>Dashboard</Heading>
                <Button onClick={ocultarFiltro} mx={2}> <FaSearch />Filtros</Button>
                <Aside></Aside>
            </Flex>


            {filtros &&
                <Stack my={3}>
                    <Filtros onVendedor={handleChange} onFecha={handleFechaInicio} onFechaFinal={handleFechaFinal} mesActual={mesActual}></Filtros>
                </Stack>
            }


            <Separator size="lg" my={10} />

            {loading && <SpinnerLoading></SpinnerLoading>}

            
            <Stack my={3}>
                <Heading  >Metricas Principales</Heading>
                <InfoTarjetas data={data}></InfoTarjetas>
            </Stack>

            <Separator size="lg" my={10} />

            <Stack my={3}>
                <Heading  >Vendedores</Heading>
                <ListaBarras data={data} elemento={true} ></ListaBarras>
            </Stack>

            <Separator size="lg" my={10} />

            <Stack my={3}>
                <Heading mt={5}>Ventas Mensuales</Heading>
                <GraficoBar data={data} fecha={fecha}></GraficoBar>
            </Stack>

            <Separator size="lg" my={10} />

            <Stack my={3}>
                <Heading  >Ventas por Marca</Heading>
                <Tablacategorias data={data}></Tablacategorias>
            </Stack>

            <div className="tablaPedidos">
                {/* <TablaPedidos vendedor={vendedor} fecha={fecha}></TablaPedidos> */}
            </div>
        </Stack>
    )
}
