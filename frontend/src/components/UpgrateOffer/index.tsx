import { ButtonTransition } from "../ButtonTransition";
import Carousel from "../Carousel";
import { Container } from "./styles";

export function UpgrateOffers() {
  return (
    <Container>
      <div className="upgradeTitle">
        <h1>DÊ UM UPGRADE NO SEU GEAR</h1>
        <ButtonTransition title="Ver tudo" />
      </div>
      <Carousel />
    </Container>
  );
}