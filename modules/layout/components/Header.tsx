'use client'

import { Box, Text, Flex, Image } from '@chakra-ui/react'
import { Link } from '@chakra-ui/next-js'
import { useRouter } from 'next/navigation'

interface Path {
  text: string;
  path: string;
}

const PATHS: Path[] = [
  {
    text: '/',
    path: '/',
  },
  {
    text: '/resume',
    path: '/resume',
  },
]

function HeaderLink({ link }: { link: Path }) {
  return (
    <Link
      href={link.path}
      _hover={{ color: 'blue.300', textDecoration: 'underline' }}
      _active={{ color: 'blue.300', textDecoration: 'underline' }}
    >
      <Text fontWeight="bold">{link.text}</Text>
    </Link>
  )
}

export default function Header() {
  const router = useRouter()

  return (
    <Box w="100%">
      <Flex
        w="100%"
        maxW="72rem"
        p={4}
        m="auto"
        alignItems="center"
        justifyContent="space-between"
      >
        <Flex gap={4} alignItems="center">
          {PATHS.map((link) => (
            <HeaderLink key={link.path} link={link} />
          ))}
        </Flex>

        <Box>
          <Image
            src="https://avatars.githubusercontent.com/u/85422142"
            alt=""
            boxSize="48px"
            borderRadius="full"
            border="1px solid"
            borderColor="whiteAlpha.300"
          />
        </Box>
      </Flex>
    </Box>
  )
}
