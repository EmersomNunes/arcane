import { Button } from "../Button";
import { ButtonTransition } from "../ButtonTransition";
import Carousel from "../Carousel";
import { Container } from "./styles";

export function BestSellers() {
  return (
    <Container>
      <div className="title">
        <h1>MAIS VENDIDOS</h1>
        <ButtonTransition title="Ver tudo"/>
      </div>
      <Carousel />
    </Container>
  );
}