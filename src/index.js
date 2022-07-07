
import React from "react";
import ReactDOM from "react-dom";
import {ChakraProvider} from "@chakra-ui/react"
import Home from "./Home";
const divRoot= ReactDOM.createRoot( document.getElementById('root'))
divRoot.render(
    <React.StrictMode>
    <ChakraProvider>
    <Home></Home>
    </ChakraProvider>
    </React.StrictMode>
)
