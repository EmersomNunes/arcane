import { Container, CardItem } from "./styles";

interface CardType {
  title: string;
  image: string
}

export function Card({ title, image }: CardType) {
  return (
    <Container>
      <CardItem>
        <div>
          <img src={image} alt="" />
          {title}
        </div>
      </CardItem>
    </Container>
  );
}