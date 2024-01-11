import { Box, Flex, Heading, Text } from '@chakra-ui/react'

export default function Resume() {
  return (
    <main>
      <Flex direction={{ base: 'column', md: 'row' }} gap={4}>
        <Flex
          direction="column"
          borderRadius="xl"
          border="1px"
          borderColor="whiteAlpha.300"
          px={6}
          py={4}
          gap={8}
        >
          <Box flex={1}>
            <Heading>Education</Heading>

            <Flex gap={4} mt={4}>
              <Text fontWeight="bold">2013-2018</Text>
              <Box>
                <Text fontWeight="bold">
                  B.S. Computer Information Technology
                </Text>
                <Text fontWeight="bold" fontSize="sm" color="whiteAlpha.700">
                  California State University, Northridge
                </Text>
                <Text mt={2} fontSize={{ base: 'sm', md: 'initial' }}>
                  Coursework covered foundational computer science principles,
                  operating systems, networking, scripting languages, linux
                  server deployment, human-computer interaction, systems design
                  and engineering, as well as web application development
                </Text>
              </Box>
            </Flex>
          </Box>
        </Flex>

        <Flex
          direction="column"
          borderRadius="xl"
          border="1px"
          borderColor="whiteAlpha.300"
          px={6}
          py={4}
          gap={8}
          minW="40%"
        >
          <Box flex={1}>
            <Heading>Skills</Heading>

            <Flex
              as="ul"
              direction="column"
              mt={4}
              fontSize="sm"
              sx={{ listStyle: 'none' }}
            >
              <Text as="li">React/Next.js</Text>
              <Text as="li">TypeScript</Text>
              <Text as="li">Web3 (EVM/Ethers/WAGMI, some Solana eco)</Text>
              <Text as="li">MySQL/PostgreSQL</Text>
              <Text as="li">Node.js/Express.js</Text>
              <Text as="li">REST API Design/Implementation/Usage</Text>
              <Text as="li">Scripting</Text>
              <Text as="li">UI/UX Design</Text>
              <Text as="li">
                Adobe Creative Suite (PS/Illustrator/InDesign)
              </Text>
              <Text as="li">Linux Server Provision & Administration</Text>
            </Flex>
          </Box>
        </Flex>
      </Flex>
    </main>
  )
}
