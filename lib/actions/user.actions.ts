'use server';
import { signInSchema } from '../validators';
import { signIn, signOut } from '@/auth';
import { isRedirectError } from 'next/dist/client/components/redirect-error';

export async function SignInLocal(prevState: unknown, form: FormData) {
    try{
        const user = signInSchema.parse({
            email: form.get('email') as string,
            password: form.get('password') as string
        });
        await signIn('credentials', user);
        return {success: true, message: 'Successfully signed in'};
    } catch(error) {
        if(isRedirectError(error)){
            throw error;
        }
        return {success: false, message: 'Invalid email or password'};
    }
}

export async function SignOut() {
    await signOut();
    return {success: true, message: 'Successfully signed out'};
}
