import { Banner, Container } from "./styles";
import { Header } from "../../components/Header";
import { MobileMenu } from "../../components/MobileMenu";
import banner from "../../assets/banner.webp";
import { OfferBox } from "./components/OfferBox";
import Cyber from "../../assets/Cyber.webp";
import { BestSellers } from "./components/BestSellers";
import { Card } from "./components/Card";
import Console from "../../assets/Console.webp";
import { OtherOffers } from "./components/OtherOffers";
import { UpgrateOffers } from "./components/UpgrateOffer";
import { TrandingGames } from "./components/TrendingGames";
import { Footer } from "../../components/Footer";
import BackgroundBeforeFooter from "../../assets/BackgroundBeforeFooter.webp"

export function Home() {
  return (
    <Container>
      <Header />
      <MobileMenu />
      <Banner>
        <img src={banner} alt="banner do site" />
        <div>
          <OfferBox
            title={
              <div className="descriptionOffer">
                Mais poder ao seu gaming

                <h1>CYBER KID INFINITE</h1>
                <span>Disponível para PC e console</span>
              </div>}
            buttonName="Comprar agora"
          />
          <img src={Cyber} alt="Imagem robotica" />
        </div>
      </Banner>

      <BestSellers />

      <div className="cards">
        <h1>VEJA POR CATEGORIA</h1>

        <div className="card">
          <Card
            image={Console}
            title="Console"
          />
          <Card
            image={Console}
            title="Acessórios"
          />
          <Card
            image={Console}
            title="Controles"
          />
        </div>
      </div>

      <OtherOffers />
      <UpgrateOffers />
      <TrandingGames />
      <div className="sendEmail">
        <img src={BackgroundBeforeFooter} alt="Imagem decorativa" />
      </div>
      <Footer />
    </Container>
  );
}