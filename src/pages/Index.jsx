import { Box, Container, Flex, Heading, Image, Link, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Navigation Bar */}
      <Box as="nav" bg="gray.800" color="white" py={4}>
        <Flex justify="space-between" align="center" px={8}>
          <Heading as="h1" size="lg">NYT Clone</Heading>
          <Flex>
            {["Home", "World", "U.S.", "Politics", "N.Y.", "Business", "Opinion", "Tech", "Science", "Health", "Sports", "Arts", "Books", "Style", "Food", "Travel", "Magazine", "T Magazine", "Real Estate", "Video"].map((section) => (
              <Link key={section} px={3} href="#" _hover={{ textDecoration: "underline" }}>
                {section}
              </Link>
            ))}
          </Flex>
        </Flex>
      </Box>

      {/* Main Headline Section */}
      <Box as="section" my={8}>
        <Image src="https://via.placeholder.com/1200x600" alt="Main Headline" />
        <Heading as="h2" size="xl" mt={4}>Main Headline Goes Here</Heading>
        <Text fontSize="lg" mt={2}>This is a brief description of the main headline. It provides a summary of the news article.</Text>
      </Box>

      {/* Articles Grid */}
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8} my={8}>
        {Array.from({ length: 9 }).map((_, index) => (
          <Box key={index} borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src={`https://via.placeholder.com/400x300?text=Article+${index + 1}`} alt={`Article ${index + 1}`} />
            <Box p={4}>
              <Heading as="h3" size="md">Article {index + 1} Headline</Heading>
              <Text mt={2}>This is a brief description of the article. It provides a summary of the news content.</Text>
            </Box>
          </Box>
        ))}
      </SimpleGrid>

      {/* Footer */}
      <Box as="footer" bg="gray.800" color="white" py={8} mt={8}>
        <Flex justify="space-between" align="center" px={8}>
          <Flex>
            {["Home", "World", "U.S.", "Politics", "N.Y.", "Business", "Opinion", "Tech", "Science", "Health", "Sports", "Arts", "Books", "Style", "Food", "Travel", "Magazine", "T Magazine", "Real Estate", "Video"].map((section) => (
              <Link key={section} px={3} href="#" _hover={{ textDecoration: "underline" }}>
                {section}
              </Link>
            ))}
          </Flex>
          <Flex>
            <Link href="#" mx={2}><FaFacebook size="24px" /></Link>
            <Link href="#" mx={2}><FaTwitter size="24px" /></Link>
            <Link href="#" mx={2}><FaInstagram size="24px" /></Link>
          </Flex>
        </Flex>
      </Box>
    </Container>
  );
};

export default Index;