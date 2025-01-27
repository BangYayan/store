'use-client';
import { APP_NAME } from "@/lib/constants";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const NotFoundPage = () => {
    return ( <div className="flex flex-col items-center justify-center h-screen">
        <Image src='/images/logo.svg' width={48} height={48} alt={`${APP_NAME} logo`} priority={true}></Image>
        <div className="p-6 w-1/3 rounded-lg shadow-md text-center">
            <div className="text-3xl font-bold mb-4">Not found</div>
            <div className="text-red-500 text-sm mb-3">Could not find requested page</div>
            <Button asChild variant="outline" >
                <Link href='/'>Back to Home</Link>
            </Button>
        </div>
    </div> );
}
 
export default NotFoundPage;