
import { Slider } from "@/components/dashboard/slider";
import { lusitana } from "@/components/ui/fonts";

export default function Page() {

    return (
        <main>
            <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
                Home
            </h1>
            <div className="p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden   ">
                <div
                    className="rounded-xl relative aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover"
                    style={{ backgroundImage: `url(https://images.pexels.com/photos/1076885/pexels-photo-1076885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)` }}
                >
                    <div className="h-full w-full flex flex-col justify-center items-center text-center gap-y-8">
                        <div className="font-bold text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs">
                            
                        </div>

                    </div>

                </div>
            </div>
            <div className="p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden flex justify-center">
                    <Slider />
            </div>
            
        </main>
    );
}