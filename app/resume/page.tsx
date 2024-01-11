import { Box, Flex, Heading, Text } from '@chakra-ui/react'

export default function Resume() {
  return (
    <main>
      <Flex direction={{ base: 'column-reverse', md: 'row' }} gap={4}>
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
              <Text fontWeight="bold" minW={{ base: 20, md: 32 }}>
                2013 - 2018
              </Text>
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

      <Flex direction={{ base: 'column', md: 'row' }} gap={4} mt={4}>
        <Flex
          direction="column"
          borderRadius="xl"
          border="1px"
          borderColor="whiteAlpha.300"
          px={6}
          py={4}
          w="100%"
          gap={8}
        >
          <Box flex={1}>
            <Heading>Selected Recent Experience</Heading>

            <Box flex={1}>
              <Flex gap={4} mt={4}>
                <Text
                  fontWeight="bold"
                  minW={{ base: 20, md: 32 }}
                  fontSize="sm"
                >
                  March 2023 - December 2023
                </Text>
                <Box>
                  <Text
                    as="a"
                    href="https://gmbl.computer"
                    rel="noopener noreferrer"
                    target="_blank"
                    cursor="pointer"
                    _hover={{ color: 'blue.300', textDecoration: 'underline' }}
                    _active={{ color: 'blue.300', textDecoration: 'underline' }}
                  >
                    GMBL Computer
                  </Text>

                  <Text fontWeight="bold" fontSize="sm" color="whiteAlpha.700">
                    Frontend Engineer
                  </Text>
                  <Text mt={2} fontSize={{ base: 'sm', md: 'initial' }}>
                    Improving/updating legacy Next.js and TypeScript codebase,
                    implementing and ideating new design and features utilizing
                    Chakra UI/RainbowKit/WAGMI in the context of a real-time
                    socket/REST API and smart contract interaction driven gaming
                    platform.
                  </Text>
                </Box>
              </Flex>
            </Box>

            <Box flex={1}>
              <Flex gap={4} mt={4}>
                <Text
                  fontWeight="bold"
                  minW={{ base: 20, md: 32 }}
                  fontSize="sm"
                >
                  January 2022 - December 2023
                </Text>
                <Box>
                  <Text
                    as="a"
                    href="https://anatanft.com"
                    rel="noopener noreferrer"
                    target="_blank"
                    cursor="pointer"
                    _hover={{ color: 'blue.300', textDecoration: 'underline' }}
                    _active={{ color: 'blue.300', textDecoration: 'underline' }}
                  >
                    Anata NFT
                  </Text>

                  <Text fontWeight="bold" fontSize="sm" color="whiteAlpha.700">
                    Web Developer
                  </Text>
                  <Text mt={2} fontSize={{ base: 'sm', md: 'initial' }}>
                    Design, maintenance and development of a Next.js web
                    application and associated Node.js/PostgreSQL backend
                    tooling for an NFT project that enables token holders to
                    download and utilize VR models and artwork for personal use
                    in VR Chat, Zoom and Google meetings, etc.
                  </Text>
                </Box>
              </Flex>
            </Box>

            <Box flex={1}>
              <Flex gap={4} mt={4}>
                <Text
                  fontWeight="bold"
                  minW={{ base: 20, md: 32 }}
                  fontSize="sm"
                >
                  August 2022 - January 2023
                </Text>
                <Box>
                  <Text
                    as="a"
                    href="https://zora.co"
                    rel="noopener noreferrer"
                    target="_blank"
                    cursor="pointer"
                    _hover={{ color: 'blue.300', textDecoration: 'underline' }}
                    _active={{ color: 'blue.300', textDecoration: 'underline' }}
                  >
                    Zora
                  </Text>

                  <Text fontWeight="bold" fontSize="sm" color="whiteAlpha.700">
                    Frontend Engineer
                  </Text>
                  <Text mt={2} fontSize={{ base: 'sm', md: 'initial' }}>
                    Maintenance and feature development in Next.js/TypeScript
                    for tooling used to create and administrate DAOs in the
                    style of the NounsDAO project. Largely team-based
                    development approach with emphasis on collaboration with
                    design and product management teams to ship new features and
                    improve existing UI/UX.
                  </Text>
                </Box>
              </Flex>
            </Box>

            <Box flex={1}>
              <Flex gap={4} mt={4}>
                <Text
                  fontWeight="bold"
                  minW={{ base: 20, md: 32 }}
                  fontSize="sm"
                >
                  November 2021 - July 2022
                </Text>
                <Box>
                  <Text>Umami Finance</Text>

                  <Text fontWeight="bold" fontSize="sm" color="whiteAlpha.700">
                    Frontend Engineer & UI/UX Designer
                  </Text>

                  <Text mt={2} fontSize={{ base: 'sm', md: 'initial' }}>
                    UI/UX Design and feature development for a decentralized-
                    finance Next.js/Typescript web application that utilizes the
                    existing Arbitrum DeFI ecosystem and the project’s own
                    $UMAMI token to generate yield and distribute to its holders
                    accordingly.
                  </Text>
                </Box>
              </Flex>
            </Box>

            <Box flex={1}>
              <Flex gap={4} mt={4}>
                <Text
                  fontWeight="bold"
                  minW={{ base: 20, md: 32 }}
                  fontSize="sm"
                >
                  December 2019 - October 2021
                </Text>

                <Box>
                  <Text>[REDACTED]</Text>

                  <Text fontWeight="bold" fontSize="sm" color="whiteAlpha.700">
                    Frontend Developer
                  </Text>

                  <Text mt={2} fontSize={{ base: 'sm', md: 'initial' }}>
                    Maintenance and feature development of administrative
                    dashboard applications and landing pages for a global
                    e-commerce health and wellness brand, primarily utilizing
                    React (Next.js/TypeScript) as well as Vue.
                  </Text>
                </Box>
              </Flex>
            </Box>
          </Box>
        </Flex>

        <Flex direction="column" px={6} py={4} gap={8} minW="25%">
          <Box flex={1}>
            <Heading>Links</Heading>

            <Flex as="ul" direction="column" mt={4} sx={{ listStyle: 'none' }}>
              <Box as="li">
                <Text
                  as="a"
                  href="https://github.com/0xburden"
                  cursor="pointer"
                  target="_blank"
                  rel="noopener noreferrer"
                  _hover={{ color: 'blue.300', textDecoration: 'underline' }}
                  _active={{ color: 'blue.300', textDecoration: 'underline' }}
                >
                  Github - @0xburden
                </Text>
              </Box>
              <Box as="li">
                <Text
                  as="a"
                  href="mailto:burden.eth@gmail.com"
                  cursor="pointer"
                  _hover={{ color: 'blue.300', textDecoration: 'underline' }}
                  _active={{ color: 'blue.300', textDecoration: 'underline' }}
                >
                  Gmail - burden.eth
                </Text>
              </Box>
              <Box as="li">
                <Text
                  as="a"
                  href="mailto:0xburden@protonmail.com"
                  cursor="pointer"
                  _hover={{ color: 'blue.300', textDecoration: 'underline' }}
                  _active={{ color: 'blue.300', textDecoration: 'underline' }}
                >
                  Proton Email - 0xburden
                </Text>
              </Box>
            </Flex>
          </Box>
        </Flex>
      </Flex>
    </main>
  )
}
