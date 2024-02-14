import { Poppins } from "next/font/google"; 

import { cn } from "@/lib/utils";
import Image from "next/image";

const font= Poppins({
    subsets:["latin"],
    weight:["600"],
});

interface headerProps{
    label:string;
};

export const Header = ({
    label
}:headerProps) => {
    return ( 
        <div className="w-full flex flex-col gap-y-4 items-center justify-center">
            <Image
                src="/mah.png"
                width={85}
                height={85}
                className='items-center gap-5 px-1 py-3 text-sm font-medium'
                alt='maharashtra logo'
          />
            {/* <h1 className={cn(
                "text-3xl first-line:font-semibold",
                font.className,
            )}>
                MRSAC
            </h1> */}
            {/* <h1 className={cn(
                "text-4xl font-semibold",
                font.className,
            )}>🔐</h1> */}
            <p className="text-3xl text-muted-forground ">
            🔐{label}
            </p>
        </div>
     );
}
