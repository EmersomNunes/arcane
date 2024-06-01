import { Banner, Container } from "./styles";
import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { MobileMenu } from "../../components/MobileMenu";
import banner from "../../assets/banner.webp";
import api from "../../api";
import { OfferBox } from "../../components/OfferBox";
import Cyber from "../../assets/Cyber.webp"
import { BestSellers } from "../../components/BestSellers";

interface ProductsType {
  id: number;
  name: string;
  price: number;
}

export function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await api.get('/products');
        setProducts(response.data);
      } catch (e) {
        console.error("Error ao buscar produtos: ", e);
      }
    }

    fetchProducts();
  }, []);

  return (
    <Container>
      <Header />
      <MobileMenu />
      <Banner>
        <img src={banner} alt="banner do site" />
        <div>
          <OfferBox
            title={
              <div className="descriptionOffer">
                Mais poder ao seu gaming

                <h1>CYBER KID INFINITE</h1>
                Disponível para PC e console
              </div>}
            button={
              <button
                className="buyNow">
                Comprar agora
              </button>
            }
          />
          <img src={Cyber} alt="Imagem robotica" />
        </div>
      </Banner>
      <BestSellers/>
    </Container>
  );
}