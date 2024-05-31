import { Container, Navegation } from "./styles";
import logo from "../../assets/logo.svg";
import { TextButton } from "../ButtonText";
import { FaUserCircle, FaCartPlus } from "react-icons/fa";

export function Header() {
  return (
    <Container>
      <a href="/">
        <img src={logo} alt="Logo do site" />
        <span>ARCADE</span>
      </a>

      <Navegation>
        <TextButton
          title="Produtos"
        />
        <TextButton
          title="Promoções"
        />
        <TextButton
          title="Contato"
        />
        <a className="login">
          <FaUserCircle /> Login
        </a>

        <a>
          <FaCartPlus size={22} />
          <span>0</span>
        </a>
      </Navegation>
    </Container>
  );
}