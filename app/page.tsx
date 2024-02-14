import { Poppins } from "next/font/google";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { LoginButton } from "@/components/auth/login-button";
import AcmeLogo from "@/components/ui/acme-logo";
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { lusitana } from "@/components/ui/fonts";
import Image from 'next/image';

const font= Poppins({
  subsets:["latin"],
  weight:["600"]
})



export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52">
        <AcmeLogo />
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
          <div
            className="h-0 w-0 border-b-[30px] border-l-[20px] border-r-[20px] border-b-black border-l-transparent border-r-transparent"
          />

          <p className={`${lusitana.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}>
            <strong>Welcome to MRSAC.</strong> This is the {' '}
            <a href="https://nextjs.org/learn/" className="text-blue-500">
              Flood Alert System
            </a>
            , To proceed further login in below.
          </p>
          <Link
            href="/login"
            className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
            <span>Log in</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
        </div>
        <div className="flex items-center justify-center p-6 md:w-2/5 md:px-28 md:py-12">
          {/* Add Hero Images Here */}
          <Image
            src="/flood-img.png"
            width={1600}
            height={760}
            className='hidden md:block items-center'
            alt='Screenshots of the dashboard project showing destop version'
          />

          {/* Add mobile image here */}
          <Image
            src="/flood-img.png"
            height="620"
            width="560"
            className='block md:hidden'
            alt='Screenshots of the dashboard project showing mobile version'
          />
        </div>
      </div>
    </main>
    // <main className="flex h-full flex-col items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800">
    //   <div className="space-y-6 text-center">
    //     <h1 className={cn(
    //       "text-6xl font-semibold text-white drop-shadow-md",
    //       font.className,
    //     )}>
    //       🔐Auth
    //     </h1>
    //     <p className="text-white text-lg">
    //       A simple authentication serivce
    //     </p>
    //     <div>
    //       <LoginButton>
    //         <Button variant="secondary" size="lg">
    //           Sign In
    //         </Button>
    //       </LoginButton>
    //     </div>
        
    //   </div>
    // </main>
  );
}
