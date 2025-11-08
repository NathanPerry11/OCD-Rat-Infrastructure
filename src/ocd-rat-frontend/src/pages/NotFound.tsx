import NotFoundIcon from '@/assets/ui/NotFoundIcon.png';


export function NotFound() {

    return (
        <div className="flex flex-col justify-center items-center py-20 px-15 lg:px-40 mt-20">
            <img src={NotFoundIcon} className="h-60 rounded-lg object-cover" alt="" />
              <h1 className="scroll-m-10 text-center text-2xl font-bold tracking-tight text-balance ">
               404 - Not Found.
            </h1>
            <p className="text-muted-foreground text-center text-lg mt-5">
                Your Link is a little <i>hole-y</i>. 
            </p>
            <p className="text-muted-foreground text-center text-lg">
                <i>Cheddar Luck</i> next time! 
            </p>
        </div>
    );
}

