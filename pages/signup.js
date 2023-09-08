import React, { useState } from "react";
import { useRouter } from "next/router";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Grid,
  HStack,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Spacer,
  Text,
  Toast,
  VStack,
} from "@chakra-ui/react";

const Signup = () => {
  const router = useRouter();

  // form data
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  console.log(formData);

  // show or hide password state
  const [showPassword, setShowPassword] = useState("false");
  const [confirmShowPassword, setConfirmShowPassword] = useState("false");

  // error state
  const [error, setError] = useState({
    isError: false,
    errorMessage: "",
  });

  // handle on change input value
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // on signup handler
  const onSignupHandler = (e) => {
    e.preventDefault();

    // checking is all inputs are filled are not
    if (
      formData.firstname === "" ||
      formData.lastname === "" ||
      formData.email === "" ||
      formData.username === "" ||
      formData.password === "" ||
      formData.confirmPassword === ""
    ) {
      setError({
        isError: true,
        errorMessage: "Please Fill Data",
      });
    }

    // checking password and confirm password
    if (formData.password !== formData.confirmPassword) {
      setError({
        isError: true,
        errorMessage: "Passwords must match",
      });
    } else {
      setError({
        isError: false,
        errorMessage: "",
      });
    }
  };

  return (
    <Box display="flex">
      <Box
        w="35%"
        h="100vh"
        bg="#000"
        display={["none", "none", "none", "flex"]}
        alignItems="center"
        justifyContent="center"
      >
        <Text fontSize={72} as="b" color="blue.400">
          Venhan
        </Text>
      </Box>
      <Box
        w={["100%", "100%", "100%", "65%"]}
        p={["5px", "10px", "0"]}
        bg="#F5F5F5"
        display="flex"
        alignItems="center"
        justifyContent="center"
        minH="100vh"
      >
        <Box w="" display="flex" flexDirection="column" gap="4">
          <Box>
            <Heading color="blue.500" fontSize="head3" fontWeight={700}>
              Sign Up
            </Heading>
            <Text fontSize={16} fontWeight={400}>
              Sign up to your account
            </Text>
          </Box>
          <form onSubmit={onSignupHandler}>
            <Grid
              bg="#fff"
              p={6}
              w={["80vw", "80vw", "600px"]}
              gap={5}
              columnGap={10}
              borderRadius={20}
              templateColumns={[
                "repeat(1, 1fr)",
                "repeat(1, 1fr)",
                "repeat(2, 1fr)",
              ]}
            >
              <Box>
                <FormLabel mb="8px">First Name</FormLabel>
                <Input
                  required
                  type="text"
                  bg="#EAEAEA"
                  variant="filled"
                  placeholder="First Name"
                  borderRadius="10px"
                  onChange={handleInputChange}
                  value={formData.firstname}
                  name="firstname"
                />
              </Box>
              <Box>
                <FormLabel mb="8px">Last Name</FormLabel>
                <Input
                  required
                  type="text"
                  bg="#EAEAEA"
                  variant="filled"
                  placeholder="Last Name"
                  borderRadius="10px"
                  onChange={handleInputChange}
                  value={formData.lastname}
                  name="lastname"
                />
              </Box>
              <Box>
                <FormLabel mb="8px">Email</FormLabel>
                <Input
                  required
                  bg="#EAEAEA"
                  type="email"
                  variant="filled"
                  placeholder="Email"
                  borderRadius="10px"
                  onChange={handleInputChange}
                  value={formData.email}
                  name="email"
                />
              </Box>
              <Box>
                <FormLabel mb="8px">UserName</FormLabel>
                <Input
                  required
                  type="text"
                  bg="#EAEAEA"
                  variant="filled"
                  placeholder="UserName"
                  borderRadius="10px"
                  onChange={handleInputChange}
                  value={formData.username}
                  name="username"
                />
              </Box>
              <Box>
                {/* password input */}
                <FormLabel mb="8px">Password</FormLabel>
                <InputGroup>
                  <Input
                    required
                    bg="#EAEAEA"
                    variant="filled"
                    type={showPassword === "true" ? "text" : "password"}
                    placeholder="Password"
                    onChange={handleInputChange}
                    value={formData.password}
                    name="password"
                  />
                  <InputRightElement>
                    <Box>
                      {showPassword === "true" ? (
                        <ViewOffIcon
                          onClick={() => setShowPassword("false")}
                          color="gray.800"
                        />
                      ) : (
                        <ViewIcon
                          onClick={() => setShowPassword("true")}
                          color="gray.800"
                        />
                      )}
                    </Box>
                  </InputRightElement>
                </InputGroup>
              </Box>
              <Box>
                {/* confirm password input */}
                <FormLabel mb="8px">Confirm Password</FormLabel>
                <InputGroup>
                  <Input
                    required
                    bg="#EAEAEA"
                    variant="filled"
                    type={confirmShowPassword === "true" ? "text" : "password"}
                    placeholder="Password"
                    onChange={handleInputChange}
                    value={formData.confirmPassword}
                    name="confirmPassword"
                  />
                  <InputRightElement>
                    <Box>
                      {confirmShowPassword === "true" ? (
                        <ViewOffIcon
                          onClick={() => setConfirmShowPassword("false")}
                          color="gray.800"
                        />
                      ) : (
                        <ViewIcon
                          onClick={() => setConfirmShowPassword("true")}
                          color="gray.800"
                        />
                      )}
                    </Box>
                  </InputRightElement>
                </InputGroup>
              </Box>
              <Box>
                <Button
                  colorScheme="blue"
                  fontSize={16}
                  fontWeight={700}
                  borderRadius={10}
                  type="submit"
                >
                  Sign In
                </Button>
                {error.isError ? (
                  <Text color="red.600">{error.errorMessage}</Text>
                ) : null}
              </Box>
            </Grid>
          </form>
          <HStack color="#858585" textAlign="center">
            <Text>Alredy Register</Text>
            <Text color="blue.500" onClick={() => router.push("/login")}>
              Login here
            </Text>
          </HStack>
        </Box>
      </Box>
    </Box>
  );
};

export default Signup;
