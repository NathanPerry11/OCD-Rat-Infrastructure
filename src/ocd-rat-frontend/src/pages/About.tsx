import { FrequentlyAskedQuestions } from "@/components/FrequentlyAskedQuestions";


import Aidan from "@/assets/team/aidan_goodyer.png";
import Jeremy from "@/assets/team/jeremy_orr.png";
import Leo from "@/assets/team/leo_vugert.png";
import Tim from "@/assets/team/tim_pokanai.png";
import Nathan from "@/assets/team/nathan_perry.png";
import Henry from "@/assets/team/henry_szechtman.png";
import Anna from "@/assets/team/anna_dvorkin_gheva.png";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import { Link } from "react-router-dom";


export function About() {
    return (

        <div className="flex flex-col justify-center items-center py-20 px-15 lg:px-40">



            <section className="flex flex-col justify-center items-center">

                <h1 className="scroll-m-10 text-4xl font-bold tracking-tight text-balance pb-10">
                    Team
                </h1>



                <div className="flex flex-col gap-5 flex-wrap items-center justify-center w-full  ">





                    <ProfileSection
                        fullname="Henry Szechtman"
                        img={Henry}
                        desc="A description of Dr. Szectchtman's work can go here. For now, dummy text is placed instead. Any relevant links or resources can also be placed here." />





                    <ProfileSection
                        fullname="Anna Dvorkin-Gheva"
                        img={Anna}
                        desc="A description of Dr. Dvorkin-Gheva's work can go here. For now, dummy text is placed instead. Any relevant links or resources can also be placed here."

                    />




                </div>

                <p className="text-xl font-semibold m-6 mt-8">
                    Capstone Students
                </p>


                <div className="flex flex-row gap-5 flex-wrap justify-center p-4 mb-2">
                    <ProfileItem fullname="Aidan Goodyer" img={Aidan} />
                    <ProfileItem fullname="Jeremy Orr" img={Jeremy} />
                    <ProfileItem fullname="Leo Vugert" img={Leo} />
                    <ProfileItem fullname="Nathan Perry" img={Nathan} />
                    <ProfileItem fullname="Tim Pokanai" img={Tim} />
                </div>



                <p className="text-muted-foreground text-sm text-center font-thin mt-12 ">
                    RatBat 2 builds upon foundational work established by Capstone 2024/2025 team:
                    Brandon Carrasco, Daniel Locke, Jamie Wong, Inoday Yadav.

                </p>

            </section>


            <Separator className="m-10" />

            <section className="flex flex-col justify-center items-center w-full">
                <h1 className="scroll-m-10 text-2xl font-bold tracking-tight text-balance p-10 text-center">
                    Frequently Asked Questions
                </h1>

                <div className="max-w-2xl w-full mx-auto px-4">
                    <FrequentlyAskedQuestions />
                </div>

                <p className="text-center text-muted-foreground text-sm mt-10">Don't see your question?</p>
                <Link to="/query">
                    <Button variant="outline" size="sm" className="w-20 p-2 m-2 text-muted-foreground text-sm">
                        Ask <Sparkles />
                    </Button>
                </Link>
            </section>






        </div>


    );

}


type ProfileItemProps = {
    fullname: string,
    img: string,
    desc?: string
}
const ProfileItem = ({ fullname, img }: ProfileItemProps) => {
    return (
        <div
            className="flex flex-col justify-center items-center
             hover:brightness-110
             transition
             duration-100
             flex-shrink-0
             w-32
              ">
            <img src={img} alt={`Profile picture of ${fullname}`}
                className={`w-25 rounded-full mb-3 object-cover`}

            />
            <span className="text-center" >{fullname}</span>
        </div>
    );

}


const ProfileSection = ({ fullname, img, desc }: ProfileItemProps) => {
    return (

        <div className="flex flex-row  w-200">
            <div
                className="flex flex-col justify-center items-center
             hover:brightness-110
             transition
             duration-100
             flex-shrink-0
             w-48
              ">
                <img src={img} alt={`Profile picture of ${fullname}`}
                    className={`w-32 rounded-full mb-3 object-cover`}

                />

            </div>
            <div>
                <h3 className="text-l mt-4 font-bold">
                    {fullname}
                </h3>
                <p className="mt-2 text-muted-foreground">
                    {desc}
                </p>
            </div>
        </div>

    );

}


