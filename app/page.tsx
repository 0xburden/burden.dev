import { Flex, Box, Text, Heading, Image } from '@chakra-ui/react'

export default function Home() {
  return (
    <main>
      <Box maxW="48rem" mx="auto">
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
            <Heading>Who?</Heading>

            <Flex direction="column" gap={4} mt={4}>
              <Text>
                The person behind this portfolio site is a web developer who has
                been at it professionally for over six years at the time of this
                writing.
              </Text>

              <Text>
                Early experience in their career involved much scripting and
                backend logic in PHP, MySQL database querying, maintenance and
                provision of LAMP servers, and mostly plain HTML/CSS/JavaScript
                with the occasional jQuery-based plugin to fool around with.
              </Text>

              <Text>
                After cutting their teeth in typical (read &quot;old
                school&quot;) web development, they nurtured their interest in
                frontend frameworks such as React.js, backend frameworks like
                Express.js and Laravel, and being more active in the design side
                of things with Figma and/or the Adobe suite. This eventually
                landed them in a better roles, many of them more frontend
                focused (especially in React.js/Next.js + TypeScript).
              </Text>
            </Flex>
          </Box>
        </Flex>

        <Flex
          mt={8}
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
            <Heading>What have they done?</Heading>

            <Flex direction="column" gap={4} mt={4}>
              <Text>
                As mentioned above, early career experience included plain
                HTML/CSS websites, as well as email templates, tweaking
                WordPress templates, and writing scripts to accomplish database
                tasks (in PHP).
              </Text>

              <Text>
                After gaining a good fundamental understanding of the web as it
                was in the early 2010s, more modern use of frameworks and
                styling packages/patterns/compilers was the primary work in a
                full-time setting for a few years. Almost exclusively using
                React.js or Next.js, although occasionally dabbling in Vue.js or
                newer stuff like Astro.
              </Text>

              <Text>
                A few years ago, this developer went freelance to pursue working
                with several projects/companies, primarily in the crypto/Web3
                space. This was primarily frontend work but also included more
                scripting/backend logic and even some UI/UX design.
              </Text>

              <Text>Some say they are still freelancing to this day...</Text>
            </Flex>
          </Box>
        </Flex>

        <Flex
          mt={8}
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
            <Heading>What are they looking for?</Heading>

            <Flex direction="column" gap={4} mt={4}>
              <Text>Peace and quiet, mostly.</Text>

              <Text>
                Currently open to gigs/contract work or the right full time
                opportunity as a Frontend Engineer. Capable of fullstack
                contract and gig work though, all you have to do is reach out to
                find out more about my experience.
              </Text>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </main>
  )
}
