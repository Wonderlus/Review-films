"use client";

import Image from "next/image";
import { useState } from "react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import {signOut} from "next-auth/react"


function Home() {
  const [rating, setRating] = useState(0);

  const { status } = useSession();
  
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const titleTarget = (
      event.target as HTMLFormElement
    )[0] as HTMLInputElement;
    const title = titleTarget.value;

    const descTarget = (event.target as HTMLFormElement)[1] as HTMLInputElement;
    const description = descTarget.value;

    try {
      await fetch("/api/reviews", {
        method: "POST",
        body: JSON.stringify({
          title,
          description,
          rating,
          filmID: 1,
        }),
      });
    } catch (error) {
      throw new Error();
    }
  };

  if (status === "authenticated") {
    return (
      <main>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Title" />
          <input type="text" placeholder="Description" />
          <div>
            <div onClick={() => setRating(1)}>
              <Image
                src={"star.svg"}
                width={20}
                height={20}
                alt="star"
                style={rating > 0 ? { fill: "#FFFF00" } : { fill: "#fff" }}
              />
            </div>
            <div onClick={() => setRating(2)}>
              <Image src={"star.svg"} width={20} height={20} alt="star" />
            </div>
            <div onClick={() => setRating(3)}>
              <Image src={"star.svg"} width={20} height={20} alt="star" />
            </div>
            <div onClick={() => setRating(4)}>
              <Image src={"star.svg"} width={20} height={20} alt="star" />
            </div>
            <div onClick={() => setRating(5)}>
              <Image src={"star.svg"} width={20} height={20} alt="star" />
            </div>
          </div>
          <button>Submit</button>
        </form>

        
      </main>
    );
  }
  
}

export default Home;
