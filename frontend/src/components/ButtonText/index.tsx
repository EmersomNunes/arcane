import { Container } from "./styles";
import { ReactNode } from "react";

interface TextButtonType {
  title: string;
  icon?: ReactNode;
}

export function TextButton({ title, icon, ...rest }: TextButtonType) {
  return (
    <Container>
      <button  {...rest}>
        {icon}
        {title}
      </button>
    </Container>
  );
}