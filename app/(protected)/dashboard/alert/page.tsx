import { Distic } from "@/components/alert/distic";
import {  State } from "@/components/alert/state";
import { WaterBody } from "@/components/alert/water-body";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import { lusitana } from "@/components/ui/fonts";
import HorizontalNav from "@/components/dashboard/horizontal-nav";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
              Alert 
      </h1>
      <Separator className="border-neutral-800  mt-5 md-5"/>

      <div className="mt-5">
          <div className="mb-10">
            <State/>
            <Distic/>
            <WaterBody />
          </div>
          <div>
          <div>
            <div className="mb-32 grid text-center lg:max-w-10xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left ">
              <a
                href=""
                className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300  hover:dark:border-neutral-700
                hover:bg-sky-100 hover:text-blue-600  "
                target="_blank"
                rel="noopener noreferrer"
              >
                <h2 className={`mb-3 text-2xl font-semibold`}>
                  Water lavel{" "}
                  <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                    -&gt;
                  </span>
                </h2>
                <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                  Numeric value which defines the alert position.
                </p>
              </a>
            </div>

            <Input className="mt-5 mb-10 algn-center group rounded-lg border border-gray-300 px-5 py-5 transition-colors hover:border-gray-500 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 hover:text-black  "/>
          </div>
          <div>
            <div className="mb-32 grid text-center lg:max-w-10xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
              <a
                href=""
                className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300  hover:dark:border-neutral-700
                hover:bg-sky-100 hover:text-blue-600 "
                target="_blank"
                rel="noopener noreferrer"
              >
                <h2 className={`mb-3 text-2xl font-semibold`}>
                  Alert message{" "}
                  <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                    -&gt;
                  </span>
                </h2>
                <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                  Write some alert message to inform nearby people according to the water lavel.
                </p>
              </a>
            </div>

            <Textarea className="mt-5 algn-center group rounded-lg border border-gray-300 px-5 py-5 transition-colors hover:border-gray-500 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 hover:text-black "/>
          </div>
      </div>
      <div className="grid justify-center">
            <Button className="algn-center group rounded-lg border border-transparent px-5 py-5 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 hover:text-black mt-10" type="submit">
              Submit
            </Button>


        </div>

      </div>
    </main>
  );
}
