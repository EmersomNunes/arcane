import { Button } from "../../../../components/Button";
import { ButtonTransition } from "../../../../components/ButtonTransition";
import Carousel from "../../../../components/Carousel";
import { Container } from "./styles";
import Console from "../../../../assets/Console.webp";

export function BestSellers() {
  return (
    <Container>
      <div className="title">
        <h1>MAIS VENDIDOS</h1>
        <ButtonTransition title="Ver tudo"/>
      </div>
      <Carousel 
        image={Console}
        name="Teste3"
        price="R$189,00"
        button={<Button title="Adicionar"/>}
      />
    </Container>
  );
}