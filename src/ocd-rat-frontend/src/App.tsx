import { HomeCarousel } from "./components/HomeCarousel"
import { Navbar01 } from "./components/navbar"
import { Separator } from "./components/ui/separator"

import SampleTrial from '@/assets/sample_trial.webp'
import DatasetSample from '@/assets/dataset-sample-capstone.jpeg'
import { ArrowRight, Funnel } from "lucide-react"
import { Card } from "./components/ui/card"

function App() {
  return (
    <div className="relative w-full">
      <title>RatBat 2</title>
      <Navbar01 />

      <div className="flex flex-col justify-center items-center py-20 px-15 lg:px-40">

        <h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance">
          The Data Analysis Tool for Animal Models of OCD.
        </h1>

        <p className="text-muted-foreground text-xl m-6">
          A unified platform for access to 20,000+ trials in Animal Behavioural Models of Obsessive-Compulsive Disorder.
        </p>


        <HomeCarousel></HomeCarousel>


        <Separator className="my-5" />



        <h1 className="scroll-m-10 text-center text-3xl font-bold tracking-tight text-balance p-10">
          Go From Trials to Insights.
        </h1>


        <div className="flex justify-center items-center">
          <div className="flex flex-col items-center mx-4">
            <img src={SampleTrial} className="h-90 rounded-lg" alt="" />
            <p className="mt-5 text-center text-gray-600 ">Video Trial </p>
          </div>
          <ArrowRight className="m-5 h-10 w-10" />
          <div className="flex flex-col items-center mx-4">
            <Card>
              <img src={DatasetSample} className="h-80 object-contain rounded-lg p-10" alt="" />

            </Card>

            <p className="mt-5 text-center text-gray-600 ">Temporal Data  </p>
          </div>
          
        </div>

        



      </div>



    </div>
  )
}

export default App