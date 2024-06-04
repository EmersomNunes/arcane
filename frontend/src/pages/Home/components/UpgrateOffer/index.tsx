import { ButtonTransition } from "../../../../components/ButtonTransition";
import Carousel from "../../../../components/Carousel";
import { Container, Banner } from "./styles";
import Console from "../../../../assets/Console.webp";
import BannerBottom from "../../../../assets/BannerBottom.webp";
import { Button } from "../../../../components/Button";

export function UpgrateOffers() {
  return (
    <Container>
      <div className="contain">
        <div className="upgradeTitle">
          <h1>DÊ UM UPGRADE NO SEU GEAR</h1>
          <ButtonTransition title="Ver tudo" />
        </div>
        <Carousel
          image={Console}
          name="Teste2"
          price="R$190,00"
          button={<Button title="Adicionar"/>}
        />
      </div>
      <Banner>
        <div>
          <h1>GASTE E GANHE</h1>
          <p>Economize 20% ao gastar mais de R$ 625</p>
          <ButtonTransition title="Comprar agora"/>
        </div>
        <img src={BannerBottom} alt="Banner de desconto" />
      </Banner>
    </Container>
  );
}