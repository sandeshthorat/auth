import HorizontalNav from "@/components/dashboard/horizontal-nav";
import SideNav from "@/components/dashboard/sidenav";
import { Separator } from "@/components/ui/separator";


export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
            <div className="w-full flex-none md:w-64">
                <SideNav />
            </div>
            
            <Separator orientation="vertical" className="border-neutral-800  " />
            <div className="flex-grow p-6 md:overflow-y-auto md:p-12">
                <HorizontalNav />
                {children}
            </div>
        </div>
    );
}