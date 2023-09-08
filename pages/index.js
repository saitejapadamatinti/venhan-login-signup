import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Button, Heading } from "@chakra-ui/react";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();
  const [isLogined, setIsLogined] = useState(true);

  useEffect(() => {
    const getSaiCookie = Cookies.get("loginToken");
    if (getSaiCookie !== "swdefrgwerg5wferb7fegr") {
      router.push("/login");
      setIsLogined(false);
    } else {
      setIsLogined(true);
    }
  }, []);

  const onLogutHandler = () => {
    Cookies.remove("loginToken");
    router.push("/login");
    setIsLogined(false);
  };

  return (
    <>
      <Heading>Home Page</Heading>
      <Button colorScheme="blue" onClick={onLogutHandler}>
        Logout
      </Button>
    </>
  );
}
