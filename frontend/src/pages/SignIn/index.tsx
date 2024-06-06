import { Container, Login } from "./styles";
import LoginScreen from "../../assets/Login2.jpg"
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export function SignIn() {
  return (
    <Container>
      <Login>
        <div>
          <h1>Faça seu login</h1>

          <Input
            type="text"
            placeholder="Nome"
          />

          <Input
            type="text"
            placeholder="E-mail"
          />

          <Input
            type="text"
            placeholder="Senha"
          />
          <Button title="Entrar" />
        </div>
      </Login>
      <img src={LoginScreen} alt="" />
    </Container>
  );
}