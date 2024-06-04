import { ButtonTransition } from "../ButtonTransition";
import Carousel from "../Carousel";
import { Container } from "./Styles";
import Console from "../../assets/Console.webp"
import { Button } from "../Button";

export function TrandingGames() {
  return(
    <Container>
      <div className="title">
        <h1>GAMES EM ALTA</h1>
        <ButtonTransition title="Ver tudo"/>
      </div>
      
      <Carousel 
        image={Console}
        name="Teste 4"
        price="R$189,00"
        button={ <Button title="Adicionar"/> }
      />
    </Container>
  );
}