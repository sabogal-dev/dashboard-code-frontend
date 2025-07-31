import { BarList, useChart } from "@chakra-ui/charts"
import { useState, useEffect } from "react"
import { useFetch } from "../hooks/useFetch"

export const ListaBarras = ({ data, elemento }) => {


  const [datos, setdatos] = useState([])

  useEffect(() => {
    data && cargarDatos(data.ventas)
  }, [data])


  function cargarDatos(listaVentas) {
    const datosRender = [
      { name: "JORGE GUALDRON", value: 0, odooUser: "JORGE GUALDRON" },
      { name: "MAYERLY ORTIZ", value: 0, odooUser: "MAYERLY ANDREA ORTIZ" },
      { name: "OSCAR DANIEL", value: 0, odooUser: "OSCAR DANIEL RIOS LOAIZA" },
      { name : "SANTIAGO LONDOÑO", value: 0, odooUser : "SANTIAGO LONDOÑO"},
      { name: "YESID SIERRA", value: 0, odooUser: "YESID FERNANDO SIERRA SIERRA" },
      { name: "LADY RIOS", value: 0, odooUser: "LADY RIOS" },
      { name: "OFICINA", value: 0, odooUser: "OFICINA" },
    ]

    // revisa cada vendedor y le suma sus ventas
    datosRender.forEach(vendedor => {
      listaVentas.forEach(venta => {
        if (venta.user_id[1] == vendedor.odooUser) {
          vendedor.value = vendedor.value + venta.amount_untaxed;
        }
      });
    });
    setdatos(datosRender)
  }
  const chart = useChart({
    sort: { by: "value", direction: "desc" },
    data: datos,
    series: [{ name: "name", color: "teal.subtle" }],
  })



  if (elemento) {
    return (
      <BarList.Root chart={chart}>
        <BarList.Content>
          <BarList.Label title="Vendedor" flex={10}>
            <BarList.Bar tooltip />
          </BarList.Label>

          <BarList.Label title="Dinero" titleAlignment="end">
            <BarList.Value valueFormatter={(value) => `$ ${Intl.NumberFormat("es-CL").format(value)}`}></BarList.Value>
          </BarList.Label>
        </BarList.Content>
      </BarList.Root >
    )
  }

}
