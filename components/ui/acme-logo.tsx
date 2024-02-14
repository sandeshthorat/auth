import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/components/ui/fonts';
import Image from 'next/image';

export default function AcmeLogo() {
  return (
    <div
      className={`${lusitana.className} w-full flex flex-row gap-y-4 items-start justify-start leading-none text-white`}
    >
      <Image
            src="/mah.png"
            width={100}
            height={100}
            className='hidden md:block items-center gap-5 px-1 py-3 text-sm font-medium'
            alt='maharashtra logo'
          />
          <Image
            src="/mah.png"
            width={35}
            height={35}
            className='block md:hidden py-2  '
            alt='maharashtra logo'
          />
      <div className='px-7'>
        <p className="text-[30px] font-bold">Maharashtra Remote Senssing Application Center , Nagpur</p>
        <p className="text-[18px] py-8 ">Flood Alert System</p>
      </div>
    </div>
  );
}
