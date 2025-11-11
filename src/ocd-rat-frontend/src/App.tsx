import { Navbar01 } from "./components/navbar"
import {Route, Routes} from 'react-router-dom';

import { Footer } from "./components/Footer"
import { Home } from "./pages/Home"

import {NotFound} from "./pages/NotFound"
import { Experiments } from "./pages/Experiments";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
    <div className="relative w-full flex-grow">
      <title>RatBat 2</title>
      <Navbar01 />

      <Routes>
        <Route path="/" element ={<Home/>}/>
         <Route path="/query" element ={<NotFound/>}/>
            <Route path="/experiments" element ={<Experiments/>}/>
            <Route path="/about" element ={<NotFound/>}/>
            <Route path="*" element={<NotFound />} />
      </Routes>
      

    </div>

<Footer></Footer>
    
 </div>
  )
}

export default App