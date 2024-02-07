import BackgroundLayout from "@/layouts/BackgroundLayout";
import React, { useEffect } from "react";
import HeroSection from "./HeroSection";
import BestSellers from "./BestSellers";
import ClientReview from "./ClientReview";
import InfoBox from "./InfoBox";
import { useDispatch } from "react-redux";
import { getProducts } from "@/reducers/actions/product.dispatch";

const LandingPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        await dispatch(getProducts());
      } catch (error) {
        console.log(error);
      }
    };

    fetchProducts();
  }, [dispatch]);
  return (
    <>
      <BackgroundLayout>
        <HeroSection />
        <BestSellers />
        <ClientReview />
        <InfoBox />
      </BackgroundLayout>
    </>
  );
};

export default LandingPage;
