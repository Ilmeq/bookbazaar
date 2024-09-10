import {
  Button,
  Container,
  Flex,
  HStack,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

import { PlusSquareIcon } from "@chakra-ui/icons";
import { IoMoon } from "react-icons/io5";
import { LuSun } from "react-icons/lu";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Container maxW="1140px" px={4}>
      <Flex
        h={24}
        alignItems="center"
        justifyContent="space-between"
        flexDir={{
          base: "column",
          sm: "row",
        }}
      >
        <Text
          fontSize={{ base: "22", sm: "28" }}
          fontWeight="bold"
          textTransform="uppercase"
          textAlign="center"
          color={colorMode === "light" ? "blue.700" : "blue.300"}
        >
          <Link to="/">Book Bazaar</Link>
        </Text>

        <HStack spacing={4} alignItems="center">
          <Link to="/create">
            <Button
              colorScheme="teal"
              leftIcon={<PlusSquareIcon fontSize={20} />}
            >
              Add Book
            </Button>
          </Link>
          <Button onClick={toggleColorMode} colorScheme="gray">
            {colorMode === "light" ? <IoMoon size={20} /> : <LuSun size={20} />}
          </Button>
        </HStack>
      </Flex>
    </Container>
  );
};

export default Navbar;
