import Journey from "@/components/journey/Journey";
import BottomHero from "@/components/landing/bottomhero/BottomHero";
import Hero from "@/components/landing/hero/Hero";
import Test from "@/components/Test";

export default function Home() {
  return (
    <main>
      <Hero/>
      <Journey/>
      {/* <Test/> */}
      <BottomHero/>
    </main>
  );
}
