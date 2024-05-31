import { Banner, Container } from "./styles";
import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { MobileMenu } from "../../components/MobileMenu";
import banner from "../../assets/banner.webp";
import api from "../../api";

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
      <Banner>
        <img src={banner} alt="banner do site" />
        <MobileMenu />
      </Banner>
    </Container>
  );
}