
import { Avatar} from "@chakra-ui/react"


export const UsuarioAvatar = ({size}) => {
    return (
        <Avatar.Root size={size}>
            <Avatar.Fallback name="Segun Adebayo" />
            <Avatar.Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8M4fxDESQjta5kmgN4BW8SZOUMxPOinrVAA&s" />
        </Avatar.Root>
    )
}
