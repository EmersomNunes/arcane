import { ReactNode } from "react";
import { Container } from "./style";
import { ButtonTransition } from "../ButtonTransition";

export function OfferBox({ title, buttonName }: {title: ReactNode, buttonName: string}) {
  return(
    <Container>
      {title}
      {<ButtonTransition title={buttonName}/>}
    </Container>
  );
}