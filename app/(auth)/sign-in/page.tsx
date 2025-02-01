import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Metadata } from "next";
import Image from "next/image";
import SignInForm from "./sign-in-form";
import { auth } from '@/auth';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
    title: "Sign In",
}

const SingInPage = async (props : {
    searchParams: Promise<{
        callbackURL: string;
    }>
}) => {
    const {callbackURL} = await props.searchParams;

    const session = await auth();
    if(session){
        redirect(callbackURL || '/');
    }
    return ( <div className="w-full max-w-md mx-auto">
        <Card >
            <CardHeader className="gap-2 flex flex-col items-center">
                <Image src="/images/logo.svg" width={90} height={90} alt="Logo image"></Image>
                <CardTitle>Sign In</CardTitle>
                <CardDescription>Sign in to your Account</CardDescription>
            </CardHeader>
            <CardContent>
                <SignInForm></SignInForm>
            </CardContent>
        </Card>
    </div> );
}
 
export default SingInPage;