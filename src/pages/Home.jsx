import "@/styles/geriactiva.css";
import TopBar from "@/components/landing/TopBar";
import Hero from "@/components/landing/Hero";
import SocialProof from "@/components/landing/SocialProof";
import PhraseBand from "@/components/landing/PhraseBand";
import Steps from "@/components/landing/Steps";
import WhyNumbers from "@/components/landing/WhyNumbers";
import Tomos from "@/components/landing/Tomos";
import Gallery from "@/components/landing/Gallery";
import Includes from "@/components/landing/Includes";
import Audience from "@/components/landing/Audience";
import Objections from "@/components/landing/Objections";
import Bonuses from "@/components/landing/Bonuses";
import Offer from "@/components/landing/Offer";
import Results from "@/components/landing/Results";
import Faq from "@/components/landing/Faq";
import Footer from "@/components/landing/Footer";

export default function Home() {
  return (
    <div className="ga">
      <TopBar />
      <Hero />
      <SocialProof />

      <PhraseBand>Dejá de planificar desde cero. Abrí, elegí y aplicá.</PhraseBand>
      <Steps />
      <PhraseBand dark>
        Cada sesión lista en <b>minutos</b>, no en horas.
      </PhraseBand>

      <WhyNumbers />
      <Tomos />
      <PhraseBand>
        Físico, cognitivo y grupal: <span className="teal">todo en un solo lugar.</span>
      </PhraseBand>

      <Gallery />
      <Includes />
      <PhraseBand dark>
        El material que te hace ver como el <b>profesional que sos.</b>
      </PhraseBand>

      <Audience />
      <Objections />
      <Bonuses />
      <PhraseBand>Nunca más repetir ejercicios ni perder la tarde planificando.</PhraseBand>

      <Offer />
      <Results />
      <Faq />
      <Footer />
    </div>
  );
}