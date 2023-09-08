import "@/styles/globals.css";
import { ChakraProvider ,extendTheme} from "@chakra-ui/react";


const colors = {
  primaryColor : "#FF0000",
  secondaryColor : "#3784EB"
}

const fontSizes ={
  head1 : "52px",
  head2 : "42px",
  head3 : "32px",
  head4 : "28px",
  head5 : "22px",
  head6 : "16px",
}

const theme = extendTheme({colors, fontSizes})

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
