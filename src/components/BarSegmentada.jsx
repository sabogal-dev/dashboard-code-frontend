
import { BarSegment, useChart } from "@chakra-ui/charts"
import { useFetch } from "../hooks/useFetch"
import { useEffect, useState } from "react";
export const BarSegmentada = ({ vendedor, fecha }) => {

  const { data } = useFetch(vendedor, fecha);

  const [datos, setdatos] = useState([])

  useEffect(() => {
    const colores = ["green.solid", "yellow.solid", "orange.solid", "purple.solid", "blue.solid", "red.solid", "#1588E6"]
    
    if(data){
      const nuevosDatos = data.categorias.map((categoria, index) => ({
        name: categoria.marca,
        value: categoria.cantidad,
        color: colores[index]
      }));
      setdatos(nuevosDatos)
    }
  }, [data])

  const chart = useChart({
    sort: { by: "value", direction: "desc" },
    data: datos,
  })

  return (
    <>
      <h1>Monturas vendidas Por marca</h1>
      <BarSegment.Root chart={chart}>
        <BarSegment.Content>
          <BarSegment.Value />
          <BarSegment.Bar />
          <BarSegment.Label />
        </BarSegment.Content>
      </BarSegment.Root>
    </>
  )
}
