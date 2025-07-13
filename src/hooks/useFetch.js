import { useState, useEffect } from 'react'
import { format } from '@formkit/tempo'
const mesActual = format(new Date(), "YYYY-MM-01")
const hoy = format(new Date(), "YYYY-MM-DD")


export const useFetch = (vendedor, fecha = mesActual, fechaFinal = hoy) => {


    const [data, setdata] = useState(null)
    const [loading, setLoading] = useState(true)

    const cargando = () => {
        setLoading(true);
    }

    useEffect(() => {
        cargando();
        fetch(`https://sabogal.top/apiDashboard?vendedor=${vendedor}&fecha=${fecha}&fechaFinal=${fechaFinal}`)
            .then((responsive) => responsive.json())
            .then((data) => {
                setdata(data);
                setLoading(false)
            })
    }, [vendedor, fecha, fechaFinal])


    return { data, loading }
}
