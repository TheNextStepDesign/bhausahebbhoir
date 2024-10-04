import Journey from "@/components/journey/Journey";
import BottomHero from "@/components/landing/bottomhero/BottomHero";
import Hero from "@/components/landing/hero/Hero";
import News from "@/components/landing/news/News";
import SocialEmbed from "@/components/landing/socialEmbed/SocialEmbed";
import Gap from "@/components/layouts/Gap";


export default function Home() {
  return (
    <main>
      <Hero/>
      <Journey/>
      {/* <Test/> */}
      <BottomHero/>
      <SocialEmbed/>
      <Gap/>
      {/* <News/> */}
    </main>
  );
}