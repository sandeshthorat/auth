import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/components/ui/fonts';
import Image from 'next/image';

export default function Sidemahlogo() {
  return (
    <div
      className='w-full flex flex-row'
    >
          <Image
            src="/mah.png"
            width={100}
            height={100}
            className='items-center gap-5 px-2'
            alt='maharashtra logo'
          />
    </div>
  );
}
