import { ButtonTransition } from "../ButtonTransition";
import Carousel from "../Carousel";
import { Container } from "./styles";
import Console from "../../assets/Console.webp"

export function UpgrateOffers() {
  return (
    <Container>
      <div className="upgradeTitle">
        <h1>DÊ UM UPGRADE NO SEU GEAR</h1>
        <ButtonTransition title="Ver tudo" />
      </div>
      <Carousel 
        image={Console}
        name="Teste2" 
        price="R$190,00"
      />
    </Container>
  );
}