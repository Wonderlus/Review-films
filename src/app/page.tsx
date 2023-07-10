"use client"

async function Home() {
  const response = await fetch("http://localhost:3000/api/check");
  console.log(response);
  return (
    <main >
    </main>
  )
}

export default Home;