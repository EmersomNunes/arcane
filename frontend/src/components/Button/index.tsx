import { ReactNode } from "react";
import { Container } from "./styles";

interface ButtonType {
  title: string;
  icon?: ReactNode;
}

export function Button({ title, icon, ...rest }: ButtonType) {
  return(
    <Container {...rest}>
      {title}
      {icon}
    </Container>
  );
}