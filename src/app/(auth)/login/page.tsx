"use client";

import {signIn} from "next-auth/react";

const Login = () => {

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        

        const usernameTarget = (event.target as HTMLFormElement)[0] as HTMLInputElement;
        const username = usernameTarget.value;

        const passwordTarget = (event.target as HTMLFormElement)[1] as HTMLInputElement;
        const password = passwordTarget.value;


        signIn("credentials", {username, password})
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