"use client";

import {signIn} from "next-auth/react";

const Login = () => {

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        

        const nameTarget = (event.target as HTMLFormElement)[0] as HTMLInputElement;
        const name = nameTarget.value;

        const passwordTarget = (event.target as HTMLFormElement)[1] as HTMLInputElement;
        const password = passwordTarget.value;


        signIn("credentials", {name, password, callbackUrl:"http://localhost:3000/"})
    }

    return ( 
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Username" />
                <input type="password" placeholder="Password" />
                <button>Login</button>
            </form>
        </div>
     );
}
 
export default Login;