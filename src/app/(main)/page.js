import { Header } from "@/components/layout/header/Header";
import { HomePage } from "@/components/sessions/Home";

async function getStaticData() {
  console.log("Fetching data for ISR...");
  try {
    const res = await fetch("https://backend.bhooshansjr.in/api/home-page");

    // Check if the response is OK. If not, throw an error.
    if (!res.ok) {
      throw new Error(`Failed to fetch data: ${res.statusText}`);
    }

    const data = await res.json();
    return data?.data;
  } catch (error) {
    console.error("Error fetching static data:", error);
    // On error, return null or an empty object so downstream components can handle it.
    // Next.js will serve the stale data from the cache.
    return null;
  }
}

export default async function Home() {
  const data = await getStaticData();

  return (
    <>
      <Header />
      <div className="relative w-screen h-screen overflow-hidden bg-pink">
        {data ? (
          <HomePage data={data} />
        ) : (
          <div className="flex items-center justify-center w-full h-full text-center text-gray-500">
            <p>Failed to load data. Please try again later.</p>
          </div>
        )}
      </div>
    </>
  );
}
