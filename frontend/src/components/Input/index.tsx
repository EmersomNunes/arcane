import { Container } from "./styles";

export function Input({ type, placeholder }: {type: string, placeholder: string}) {
  return(
    <Container id="input" type={type} placeholder={placeholder} />
  )
}