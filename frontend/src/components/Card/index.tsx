import { Container, CardItem } from "./styles";
import { ReactNode } from "react";

interface CardType {
  title: string;
  image: ReactNode
}

export function Card({ title, image }: CardType) {
  return (
    <Container>
      <CardItem>
        <div>
          {image}
          <p>{title}</p>
        </div>
      </CardItem>
    </Container>
  );
}