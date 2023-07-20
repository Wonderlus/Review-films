"use client";

import { signOut, useSession } from "next-auth/react";
import styles from "./page.module.scss";
import Link from "next/link";

const Navbar = () => {
  const { data: session, status } = useSession();
  // console.log(session)
  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        <div className={styles.logo}>Logo</div>
        {status === "unauthenticated" || status === "loading" ? (
          <div className={styles.links}>
            <Link href={"/login"}>Login</Link>
            <Link href={"/registration"}>Registration</Link>
          </div>
        ) : (
          <div className={styles.auth}>
            <div className={styles.username}>{session?.user?.name}</div>
            <button className={styles.signout} onClick={() => signOut()}>Sign Out</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
