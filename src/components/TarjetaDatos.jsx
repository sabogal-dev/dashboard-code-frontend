import { Icon, HStack, Stat } from "@chakra-ui/react"
import { LuDollarSign } from "react-icons/lu"


export const TarjetaDatos = ({ valor, titulo, prefijo }) => {

    return (
        <>
            <Stat.Root maxW="240px" minW="170px" borderWidth="1px" p="3" rounded="md">
                <HStack justify="space-between">
                    <Stat.Label>{titulo}</Stat.Label>
                    {prefijo &&
                        <Icon color="fg.muted">
                            <LuDollarSign />
                        </Icon>
                    }
                </HStack>
                <Stat.ValueText> {prefijo && `${prefijo}`}  {Intl.NumberFormat("es-CL").format(valor)}</Stat.ValueText>
            </Stat.Root>
        </>
    )
}
