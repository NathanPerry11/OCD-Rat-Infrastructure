import { Card, CardContent, CardFooter } from "@/components/ui/card";

import Drug from "@/assets/experiments/drug.png"
import Injection from "@/assets/experiments/injection.png"
import Regression from "@/assets/experiments/regression.png"
import ObjectDetection from "@/assets/experiments/object_tracking.png"
import Chart from "@/assets/experiments/pie_chart.png"

import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { ArrowRight, Plus } from "lucide-react";


export function Experiments() {
    return (
        <div className="flex flex-col justify-center items-center py-20 px-15 lg:px-40">

            <h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance">
                Experiments
            </h1>

            <p className="text-muted-foreground text-xl mt-6">
                Choose from a template or start from scratch!
            </p>


            <Separator className="m-15" />


            <div className="flex flex-row flex-wrap justify-center gap-10">

                {experiments.map((experiment) => (
                    <ExperimentCard img={experiment.img} desc={experiment.desc} title={experiment.title} />
                ))}
            </div>

            <Button className="m-10" size='lg' >
                <Plus size={104} />New Experiment
            </Button>


        </div>
    );
}


type ExperimentTemplate = {
    img: string;
    title: string;
    desc: string;
}


const experiments = [
    {
        img: Drug,
        title: 'Drug Administered',
        desc: 'Compare results across several different Drug IDs.'
    },
    {
        img: Injection,
        title: 'Injection Count',
        desc: 'Evaluate trial outcome by injection count. '
    },
    {
        img: Chart,
        title: 'Chart',
        desc: 'Generate a chart from a set of results. '
    },
    {
        img: Regression,
        title: 'Regression',
        desc: 'Run a regression model on a specific data subset. '
    },
    {
        img: ObjectDetection,
        title: 'Object Tracking',
        desc: 'Run an object tracking model on a video file. '
    },

]

const ExperimentCard = (experiment: ExperimentTemplate) => {
    return (
        <Card className="flex flex-col items-center jus w-full max-w-[14rem] ">
            <CardContent className="flex flex-col justify-between flex-1 p-6 pt-0 pb-0">
                <img
                    src={experiment.img}
                    className="w-30 object-contain mb-4 mx-auto"
                    alt={"test"}
                />
                <div className="flex flex-col items-start">
                    <h3 className="text-xl font-semibold">{experiment.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground line-clamp-5">
                        {experiment.desc}
                    </p>
                </div>
            </CardContent>
            <CardFooter className="flex justify-end pt-0 pb-0">
                <p className="px-3 text-xs ">Use This Template</p>
                <Button variant="outline" size="icon" className="rounded-full bg-black" > <ArrowRight color="white" /></Button>
            </CardFooter>
        </Card>

    );


}