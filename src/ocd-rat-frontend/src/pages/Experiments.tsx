import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";

import Drug from "@/assets/experiments/drug.png"
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";


export function Experiments() {
    return (
        <div className="flex flex-col justify-center items-center py-20 px-15 lg:px-40">

            <h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance">
                Experiments
            </h1>

            <p className="text-muted-foreground text-xl m-6">
                Choose from a template or start from scratch!
            </p>


            <h3 className="font-semibold" >
                Templates
            </h3>

            <Separator className="m-5" />

            <ExperimentCard />


        </div>
    );
}



const ExperimentCard = () => {
    return (
        //     <Card>
        //        <img src={Drug} alt=""  className="w-50"/>

        //        <CardFooter>
        //       <h3 className="font-bold p-5">Compare Trial by Drug</h3>    
        //        </CardFooter>
        //     </Card>

        <Card className="flex flex-col w-full max-w-xs">
            <CardContent className="flex flex-col justify-between flex-1 p-6">
                <img
                    src={Drug}
                    className="w-40 object-contain mb-4 mx-auto"
                    alt={"test"}
                />
                <div>
                    <h3 className="text-xl font-semibold">Drug Administered</h3>
                    <p className="mt-2 text-sm text-muted-foreground line-clamp-5">
                        Compare results across several different Drug IDs.
                    </p>
                </div>
            </CardContent>
            <CardFooter className="flex justify-end">
                <Button variant="outline" size="icon" className="rounded-full bg-black" > <ArrowRight color="white" /></Button>
            </CardFooter>
        </Card>

    );


}