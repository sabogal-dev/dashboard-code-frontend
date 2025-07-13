import { Spinner, Text, VStack } from "@chakra-ui/react"

export const SpinnerLoading = () => {
  return (
    <VStack colorPalette="teal">
      <Spinner color="#1E1E1E" />
      <Text color="#1E1E1E">Loading...</Text>
    </VStack>
  )
}

