import { Badge, Flex, Heading } from "@chakra-ui/react";
import * as React from "react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";

export const App = () => (
  <Flex w="100%" justify="space-between" p={8}>
    <Heading>
      React + Typescript + ChakraUi
      <Badge
        fontSize="3rem"
        colorScheme="green"
        display="block"
        letterSpacing={4}
      >
        Starter
      </Badge>
    </Heading>
    <ColorModeSwitcher />
  </Flex>
);
