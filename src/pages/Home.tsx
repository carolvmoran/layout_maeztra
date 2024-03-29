import React from "react";

import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import Carousel from "../components/Banners/Carousel";
import CarouselProductCards from "../components/ProductCards/CarouselProductCards";
import CarouselBenefits from "../components/BenefitsBar/CarouselBenefits";
import CarouselBrands from "../components/Brands/CarouselBrands";
import BannerFooter from "../components/Banners/BannerFooter";

const Home = () => {
  return (
    <div className="Home">
      <Header />
      <main>
        <Carousel />
        <CarouselBenefits />
        <CarouselBrands />
        <CarouselProductCards />
        <BannerFooter />
      </main>
      <Footer />
    </div>
  );
};

export { Home };
