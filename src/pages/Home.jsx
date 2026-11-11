// @ts-ignore CSS side-effect imports are resolved by the bundler.
import "@/styles/geriactiva.css";
import TopBar from "@/components/landing/TopBar";
import Hero from "@/components/landing/Hero";
import SocialProof from "@/components/landing/SocialProof";
import PhraseBand from "@/components/landing/PhraseBand";
import Steps from "@/components/landing/Steps";
import Gallery from "@/components/landing/Gallery";
import Includes from "@/components/landing/Includes";
import Objections from "@/components/landing/Objections";
import Bonuses from "@/components/landing/Bonuses";
import Offer from "@/components/landing/Offer";
import Faq from "@/components/landing/Faq";
import Footer from "@/components/landing/Footer";
import WhyWebApp from "@/components/landing/WhyWebApp";

export default function Home() {
  return (
    <div className="ga">
      <TopBar />
      <Hero />
      <WhyWebApp />
      <SocialProof />

      <PhraseBand>Dejá de planificar desde cero. Abrí, elegí y aplicá.</PhraseBand>
      <Steps />
      <PhraseBand dark>
        Cada sesión lista en minutos, no en horas. Físico, cognitivo y grupal: todo en un solo lugar.
      </PhraseBand>

      <Includes />
      <Gallery />

      <Objections />
      <Bonuses />
      <PhraseBand>Nunca más repetir ejercicios ni perder la tarde planificando.</PhraseBand>

      <Offer />
      <Faq />
      <Footer />
    </div>
  );
}