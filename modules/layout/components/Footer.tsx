import { useMemo } from 'react'
import { Box, Flex, Text, Image } from '@chakra-ui/react'

export default function Footer() {
  const year = useMemo(() => new Date().getFullYear(), [])

  return (
    <Box w="100%" p={8}>
      <Flex
        m="auto"
        maxW="72rem"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        direction="column"
      >
        <Text color="whiteAlpha.700">&copy; {year} 0xburden</Text>
        <Image
          src="/waifusanonymous.png"
          alt=""
          boxSize="100px"
          objectFit="contain"
        />
      </Flex>
    </Box>
  )
}
