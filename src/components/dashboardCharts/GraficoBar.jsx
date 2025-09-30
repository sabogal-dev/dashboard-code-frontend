import { Chart, useChart } from "@chakra-ui/charts"
import { Bar, BarChart, CartesianGrid, Tooltip, XAxis, YAxis } from "recharts"
import { useFetch } from "../../hooks/useFetch"
import { useEffect, useState } from "react"
import { format, addMonth, diffMonths } from "@formkit/tempo"

export const GraficoBar = ({ data, fecha }) => {

    const [datos, setdatos] = useState([])

    useEffect(() => {
        data && cargarData(data.ventas)
    }, [data])


    function cargarData(listaVentas) {
        const hoy = new Date()
        const dataMeses = []
        const meses = diffMonths(hoy, fecha, "ceil");

        // crear listado de meses
        for (let index = 0; index <= meses; index++) {
            dataMeses.push({ ventas: 0, mes: format(addMonth(fecha, index), "MMM"), idMes: parseInt(format(addMonth(fecha, index), "YYYYMM")) })
        }

        // leer las ventas y sumar su total al mes correspondiente
        dataMeses.forEach((mes, index) => {
            listaVentas.forEach(venta => {
                const fechaVenta = format(venta.date_order, "YYYYMM")
                if (mes.idMes == fechaVenta) {
                    mes.ventas = mes.ventas + venta.amount_untaxed;
                }
            });
        });

        setdatos(dataMeses)
    }

    const chart = useChart({
        sort: { by: "id", direction: "asce" },
        data: datos,
        series: [{ name: "ventas", color: "#0284C7" }],
    })

    return (
        <article>
            <h1>Ventas por mes</h1>
            <Chart.Root maxH="sm" chart={chart} >
                <BarChart data={chart.data}>
                    <CartesianGrid stroke={chart.color("border.muted")} vertical={false} />
                    <XAxis axisLine={false} tickLine={false} dataKey={chart.key("mes")} tickFormatter={(value) => value.slice(0, 3)} />
                    <YAxis
                        axisLine={false}
                        tickLine={false}
                        tickFormatter={chart.formatNumber({
                            style: "currency",
                            currency: "USD",
                            notation: "compact",
                        })}
                    />
                    <Tooltip
                        cursor={{ fill: chart.color("bg.muted") }}
                        animationDuration={0}
                        content={<Chart.Tooltip />}
                    />
                    {chart.series.map((item) => (
                        <Bar
                            key={item.name}
                            isAnimationActive={true}
                            dataKey={chart.key(item.name)}
                            fill={chart.color(item.color)}
                        />
                    ))}
                </BarChart>
            </Chart.Root>
        </article>
    )

}
