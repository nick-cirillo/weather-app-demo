import { useState } from 'react'
import { Routes, Route, Navigate } from "react-router-dom";
import { ChakraProvider, useToast } from "@chakra-ui/react";

import Navbar from './Navbar';
import Home from './Home';
import Design from './Design';


function App() {
  const [count, setCount] = useState(0)

  return (
    <ChakraProvider isResettingCSS={false} >
    <div>
      <Routes>
        {/* Add more routes as needed */}
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  </ChakraProvider>
  )
}

export default App