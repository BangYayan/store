"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { useActionState } from "react";
import { SignInLocal } from "@/lib/actions/user.actions";
import { useSearchParams } from "next/navigation";

const SignInForm = () => {
  const [data, action, isPending] = useActionState(SignInLocal, {
    success: false,
    message: "",
  });
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/";
  const SignInButton = () => {
    return (
      <Button type="submit" className="w-full" disabled={isPending}>
        {isPending ? "Signing In..." : "Sign In"}
      </Button>
    );
  };
  return (
    <form action={action}>
      <input type="hidden" name="callbackUrl" value={callbackUrl} />
      <div className="space-y-4">
        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            required
          ></Input>
        </div>
        <div>
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            required
          ></Input>
        </div>
        <div>
          <SignInButton></SignInButton>
        </div>
        {data && !data.success && (
          <div className="text-sm text-destructive text-center">
            {data.message}
          </div>
        )}
        <div className="text-sm text-muted-foreground text-center">
          Don&apos;t have an account?{" "}
          <Link href="/sign-up" target="self" className="link text-primary">
            Sign Up
          </Link>
        </div>
      </div>
    </form>
  );
};

export default SignInForm;
