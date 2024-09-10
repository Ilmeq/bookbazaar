import { Container, SimpleGrid, Text, VStack, Button } from "@chakra-ui/react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useProductStore } from "../store/product";
import ProductCard from "../components/ProductCard";

const HomePage = () => {
  const { fetchProducts, products } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);
  console.log("products", products);

  return (
    <Container maxW="container.xl" py={12}>
      <VStack spacing={8}>
        <Text
          fontSize="3xl"
          fontWeight="bold"
          color="blue.600"
          textAlign="center"
        >
          Discover Your Next Great Read
        </Text>

        <Text fontSize="lg" color="gray.600" textAlign="center" maxW="2xl">
          Dive into our curated collection of books – whether you're searching
          for a classic or exploring new releases, you're bound to find
          something that sparks your imagination.
        </Text>

        <SimpleGrid
          columns={{
            base: 1,
            md: 2,
            lg: 3,
          }}
          spacing={10}
          w="full"
        >
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </SimpleGrid>

        {products.length === 0 && (
          <VStack>
            <Text
              fontSize="xl"
              textAlign="center"
              fontWeight="bold"
              color="gray.500"
            >
              No books found 😢
            </Text>
            <Link to="/create">
              <Button colorScheme="blue">Add a Book</Button>
            </Link>
          </VStack>
        )}
      </VStack>
    </Container>
  );
};

export default HomePage;
