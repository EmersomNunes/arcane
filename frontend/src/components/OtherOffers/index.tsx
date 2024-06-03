import { OfferBox } from "../OfferBox";
import { Container } from "./styles";
import Kira from "../../assets/Kira.webp";
import Carousel from "../Carousel";

export function OtherOffers() {
  return (
    <Container>
      <div className="container">
        <OfferBox title={
          <div className="boxOffer">
            A BOA DA SEMANA
            <h1>10%</h1>

            <h2>off em games</h2>
          </div>
        }
          buttonName="Comprar agora"
        />

        <section>
          <img className="game1" src={Kira} alt="Imagem do jogo Kira" />
          <img className="game2" src={Kira} alt="Imagem do jogo Kira" />
          <img className="game3" src={Kira} alt="Imagem do jogo Kira" />
        </section>
      </div>
    </Container>
  );
}