
import { NativeSelect } from "@chakra-ui/react"
import { Input, Field, Button } from "@chakra-ui/react"
import { useState } from "react"
export const Filtros = ({ onVendedor, onFecha, onFechaFinal, mesActual }) => {

    const [fechaMinima, setfechaMinima] = useState()//SI EXISTE UNA FECHA MINIMA, MUESTRA EL INPUT PARA FECHA MAXIMA

    const [formData, setformData] = useState({
        vendedor: "",
        fecha: mesActual,
        fechaFinal : ""
    })

    const submitForm = (event) => {
        event.preventDefault()
        onVendedor(formData.vendedor)
        onFecha(formData.fecha)
        onFechaFinal(formData.fechaFinal)
    }

    const onChangeForm = (e) => {
        if (e.target.name == "fecha") {
            setfechaMinima(e.target.value)
        }
        setformData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }
    return (
        <>
            <form onSubmit={submitForm}>
                <Field.Root>
                    <Field.Label>Fecha inicial</Field.Label>
                    <Input type="date" name="fecha" onChange={onChangeForm}></Input>
                </Field.Root>
                {fechaMinima &&

                    <Field.Root>
                        <Field.Label>Fecha final</Field.Label>
                        <Input type="date" name="fechaFinal" min={fechaMinima} onChange={onChangeForm}></Input>
                    </Field.Root>
                }

                <Field.Root>
                    <Field.Label>Vendedor</Field.Label>
                    <NativeSelect.Root >
                        <NativeSelect.Field name="vendedor" onChange={onChangeForm}>
                            <option value="">TODOS</option>
                            <option value="JORGE+GUALDRON">JORGE GUALDRON</option>
                            <option value="OSCAR+DANIEL+RIOS+LOAIZA">OSCAR DANIEL</option>
                            <option value="YESID+FERNANDO+SIERRA+SIERRA">YESID SIERRA</option>
                            <option value="MAYERLY+ANDREA+ORTIZ">MAYERLY ANDREA</option>
                            <option value="LADY+RIOS">LADY RIOS</option>
                            <option value="OFICINA">OFICINA</option>
                        </NativeSelect.Field>
                        <NativeSelect.Indicator />
                    </NativeSelect.Root>
                </Field.Root>
                <Button type="submit" mt={5} w="100%" colorPalette="blue">Buscar</Button>
            </form>
        </>
    )
}
