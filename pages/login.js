import React, { useState } from "react";
import Cookies from "js-cookie";
import { loginUser } from "../components/loginFunctionality";
import { useRouter } from "next/router";
import {
  Box,
  Flex,
  Text,
  Button,
  ButtonGroup,
  spacing,
  Input,
  Heading,
  useToast,
  HStack,
} from "@chakra-ui/react";

const Login = () => {
  const router = useRouter();

  // form data
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  // error state
  const [isError, setIsError] = useState({
    isErrorStatus: "",
    errorMessage: "",
  });

  // taking input values function
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Login Handler
  const onLoginHandler = async (e) => {
    e.preventDefault();

    // Getting login Status from loginApi
    const { success, user, error } = await loginUser(formData);
    if (success) {
      Cookies.set("loginToken", "swdefrgwerg5wferb7fegr", {
        expires: 60 * 60 * 1000,
      });
      router.push("/");
    } else {
      setIsError({
        isErrorStatus: "true",
        errorMessage: error,
      });
    }
  };

  return (
    <Box display="flex">
      <Box
        w="35%"
        h="100vh"
        bg="#000"
        display={{ base: "none", lg: "flex" }}
        alignItems="center"
        justifyContent="center"
      >
        <Text color="blue.400" fontSize={72} as="b">
          Venhan
        </Text>
      </Box>
      <Box
        w={["100%", "100%", "100%", "65%"]}
        h="100vh"
        bg="#F5F5F5"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Box w="385px" display="flex" flexDirection="column" gap="4" m={5}>
          <Box>
            <Heading color="secondaryColor" fontSize="head3" fontWeight={700}>
              Sign In
            </Heading>
            <Text fontSize={16} fontWeight={400}>
              Sign in to your account
            </Text>
          </Box>
          <form onSubmit={onLoginHandler}>
            <Box
              bg="#fff"
              p={6}
              display="flex"
              flexDirection="column"
              gap={5}
              borderRadius={20}
            >
              <Box>
                <Text mb="8px">Username</Text>
                <Input
                  required
                  bg="#EAEAEA"
                  variant="filled"
                  placeholder="User Name"
                  borderRadius="10px"
                  onChange={handleInputChange}
                  value={formData.username}
                  name="username"
                />
              </Box>
              <Box>
                <Text mb="8px">Password</Text>
                <Input
                  required
                  bg="#EAEAEA"
                  variant="filled"
                  placeholder="Password"
                  borderRadius="10px"
                  onChange={handleInputChange}
                  value={formData.password}
                  name="password"
                />
              </Box>
              <Text color="#346BD4" fontSize="16" fontWeight={400}>
                Forgot password?
              </Text>
              <Button
                colorScheme="blue"
                fontSize={16}
                fontWeight={700}
                borderRadius={10}
                type="submit"
              >
                Sign In
              </Button>
              {isError.isErrorStatus ? (
                <Text color="red.600">{isError.errorMessage}</Text>
              ) : null}
            </Box>
          </form>
          <HStack color="#858585" textAlign="center">
            <Text>Don’t have an account?</Text>
            <Text color="blue.500" onClick={() => router.push("/signup")}>
              Register here
            </Text>
          </HStack>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
