"use client"

import { useSession } from "next-auth/react";
import styles from "./page.module.scss";



const Navbar = () => {

    const {data: session, status} = useSession();    
    // console.log(session)
    return ( 
        <div className={styles.container}>
            <div className={styles.navbar}>
                <div>
                    Logo
                </div>
                {status === "unauthenticated" || status === "loading" ? 
                <div>
                    <div></div>
                    <button>Click</button>
                </div> : 
                <div>
                    {session!.user!.name}
                </div>
                }

            </div>
        </div>
     );
}
 
export default Navbar;