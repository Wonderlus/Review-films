"use client"

import { ReactEventHandler } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

const Registration = () => {

    const router = useRouter();

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const nameTarget = (event.target as HTMLFormElement)[0] as HTMLInputElement;
        const name = nameTarget.value;

        const passwordTarget = (event.target as HTMLFormElement)[1] as HTMLInputElement;
        const password = passwordTarget.value;

        try {
            const res = await fetch("/api/auth/registration", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name,
                    password
                }),
            })

            res.status === 201;
            signIn("credentials", {name, password, callbackUrl:"http://localhost:3000/"});
        } catch (error: any) {
            
                throw new Error(error);
            
        }
        
    }

    return ( 
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Username" />
                <input type="password" placeholder="Password" />
                <button>Registrate</button>
            </form>
        </div>
     );
}
 
export default Registration;