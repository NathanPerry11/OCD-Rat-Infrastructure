import { HomeCarousel } from "./components/HomeCarousel"
import { Navbar01 } from "./components/navbar"
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./components/ui/card"


function App() {
  return (
    <div className="relative w-full">
    <title>RatBat 2</title>
    <Navbar01 />

    <div className="flex flex-col justify-center items-center py-20 px-15 lg:px-40">

    <h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance">
      The Data Analysis Tool for Animal Models of OCD.
    </h1>

   

     <HomeCarousel></HomeCarousel>
    </div>


    
  </div>
  )
}

export default App