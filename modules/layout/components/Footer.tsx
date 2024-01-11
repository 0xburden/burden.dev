import { useMemo } from 'react'
import { Box, Flex, Text } from '@chakra-ui/react'

export default function Footer() {
  const year = useMemo(() => new Date().getFullYear(), [])

  return (
    <Box w="100%" p={4}>
      <Flex
        m="auto"
        maxW="72rem"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
      >
        <Text color="whiteAlpha.700">&copy; {year} 0xburden</Text>
      </Flex>
    </Box>
  )
}
