import { Banner, Container } from "./styles";
import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { MobileMenu } from "../../components/MobileMenu";
import banner from "../../assets/banner.webp";
import api from "../../api";
import { OfferBox } from "../../components/OfferBox";
import Cyber from "../../assets/Cyber.webp"
import { BestSellers } from "../../components/BestSellers";
import { Card } from "../../components/Card";
import Console from "../../assets/Console.webp";

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
      <BestSellers />
      <div className="cards">
        <h1>VEJA POR CATEGORIA</h1>
        
        <div className="card">
          <Card 
            title="Console" 
            image={<img src={Console}/>}
          />
          <Card 
            title="Acessórios" 
            image={<img src={Console}/>}
          />
          <Card 
            title="Controles" 
            image={<img src={Console}/>}
          />
        </div>
      </div>
    </Container>
  );
}