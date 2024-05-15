import Products from "@/components/products/Products";
import React from "react";
import "@/sass/pages/home.scss";
import { Container } from "@mui/material";
const About = () => {
  return (
    <>
      <Container maxWidth="xl">
        <h2 className="product__title">Shop All Products</h2>
      </Container>
      <Products />
    </>
  );
};

export default About;
