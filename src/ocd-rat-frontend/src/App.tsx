import { Navbar01 } from "./components/navbar"

import { Footer } from "./components/Footer"
import { Home } from "./components/Home"

function App() {
  return (
    <>
    <div className="relative w-full">
      <title>RatBat 2</title>
      <Navbar01 />

      <Home></Home>
    </div>

<Footer></Footer>
    
 </>
  )
}

export default App