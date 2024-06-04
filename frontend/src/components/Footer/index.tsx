import { Container, Logo, Product, Shop, Politic } from "./styles";
import LogoFooter from "../../assets/LogoFooter.svg"

export function Footer() {
  return (
    <Container>
      <Logo>
        <img src={LogoFooter} alt="Logo do site no footer" />
        <h1>ARCANE</h1>
      </Logo>

      <Product>
        <h2>Produtos</h2>
        <a href="">Games</a>
        <a href="">Consoles</a>
        <a href="">Controles</a>
        <a href="">Acessórios</a>
      </Product>

      <Shop>
        <h2>Loja</h2>
        <a href="/">
          Rua Manoel Pinheiro, 367 - Campos dos Goytacases
          Rio de Janeiro - RJ, 022101010
        </a>
        <a href="/">Seg. a Sex: 08:00 às 19:00</a>
        <a href="/">contato@gmail.com</a>
        <a href="/">(22)10101010</a>
      </Shop>

      <Politic>
        <h2>Políticas</h2>

        <a href="/">Termos e Condições</a>
        <a href="/">Política de Envio</a>
        <a href="/">Política de Reembolso</a>
        <a href="/">Política de Privacidade</a>
        <a href="/">Política de Cookies</a>
        <a href="/">FAQ</a>
      </Politic>
    </Container>
  );
}