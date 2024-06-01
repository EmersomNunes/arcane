import { ReactNode } from "react";
import { Container } from "./style";

export function OfferBox({ title, button }: {title: ReactNode, button: ReactNode}) {
  return(
    <Container>
      {title}
      {button}
    </Container>
  );
}