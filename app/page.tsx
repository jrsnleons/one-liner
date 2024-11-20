import { auth, signIn, signOut } from "@/auth/auth";
import { Button } from "@/components/ui/button";
import React from "react";

const page = async () => {
    const session = await auth();
    return (
        <div className="flex justify-center items-center w-screen h-screen bg-red">
            {session && session?.user ? (
                <div className="flex flex-col justify-center items-center">
                    <h1 className="text-3xl">Welcome {session.user?.name}</h1>
                    <form
                        action={async () => {
                            "use server";
                            await signOut();
                        }}
                    >
                        <Button type="submit">Sign Out</Button>
                    </form>
                </div>
            ) : (
                <div className="justifiy-center items-center">
                    <form
                        action={async () => {
                            "use server";
                            await signIn("google");
                        }}
                    >
                        <Button type="submit">Sign In</Button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default page;
